import React, { useState, useEffect, useCallback } from "react";
import ReactPlayer from "react-player";
import Ws from "@adonisjs/websocket-client";
import api from "../../services/api";

import arte from "../../assets/images/modal.png";
import { Container, Box, Status, Loading, Modal, Image } from "./styles";

const ws = Ws("wss://painel-samba.herokuapp.com");
const ghosts = [];

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);
  const [online, setOnline] = useState(false);
  const [visible, setVisible] = useState(true);

  const getStories = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await api.get("/panel", {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      if (resp.status === 200) {
        const { data } = resp;
        if (data.length < 30) {
          let i = 0;
          for (i; i < 30 - data.length; i += 1) {
            ghosts.push(i);
          }
        }

        setStories(data);
        setLoading(false);
        return;
      }
    } catch (error) {
      setLoading(false);
    }
  }, [setLoading, setStories]);

  const connectWs = useCallback(() => {
    ws.connect();

    ws.on("open", () => {
      setOnline(true);
      const panel = ws.subscribe("panel");
      panel.on("new", () => getStories());
    });

    ws.on("close", () => {
      setOnline(false);
    });

    ws.on("error", () => {
      setOnline(false);
    });
  }, [setOnline, getStories]);

  useEffect(() => {
    connectWs();
  }, [connectWs]);

  useEffect(() => {
    getStories();
  }, [getStories]);

  useEffect(() => {
    const interval = setInterval(() => getStories(), 300000);
    return () => clearInterval(interval);
  }, [getStories]);

  useEffect(() => {
    const intervalModal = setInterval(() => setVisible(!visible), 10000);
    return () => clearInterval(intervalModal);
  }, [visible, setVisible]);

  return (
    <Container>
      {loading && <Loading />}
      <Status online={online} />
      <Modal visible={visible}>
        <img src={arte} alt="SambadaJurema" />
        <div className="bg" />
      </Modal>
      {stories.map(i => (
        <Box key={i.id}>
          {i.media_type === "VIDEO" ? (
            <ReactPlayer
              playing
              loop
              url={i.media_url}
              muted
              className="video"
            />
          ) : (
            <Image url={i.media_url} />
          )}
        </Box>
      ))}
      {ghosts.length > 0 && ghosts.map(g => <Box key={g}>+</Box>)}
    </Container>
  );
}
