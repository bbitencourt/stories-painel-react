import React, { useEffect, useState, useCallback } from "react";
import apiFace from "../../services/facebook";
import { Container, Loading } from "./styles";

const token = "--FACEBOOK-TOKEN---";

export default function Stories() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getIdHashtag = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await apiFace.get(
        `/17841407231270389/stories?access_token=${token}`,
        {
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (resp.status === 200) {
        const ids = resp.data.data;
        console.log(ids);
        if (ids.length > 0) {
          await Promise.all(
            ids.map(async i => {
              const respMedia = await apiFace.get(
                `/${i.id}/?fields=id,media_type,media_url,owner,timestamp&access_token=${token}`
              );
              if (respMedia.status === 200) {
                return setData(state => [...state, respMedia.data]);
              }
            })
          );
        }
      }
      return setLoading(false);
    } catch (error) {
      return setLoading(false);
    }
  }, [setLoading]);

  useEffect(() => {
    getIdHashtag();
  }, [getIdHashtag]);

  return (
    <Container>
      {console.log(data)}
      {loading && <Loading>Carregando ...</Loading>}
      <ul>
        {data &&
          !loading &&
          data.map(d => (
            <li key={d.id}>
              <img src={d.media_url} alt="storie" />
            </li>
          ))}
      </ul>
    </Container>
  );
}
