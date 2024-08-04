import React, { useEffect, useState } from "react";
import styles from "./SwapiPerson.module.css";
export interface SwapiPersonProps {
  /**
   * Id of the person
   */
  id: number;
}
interface Person {
  name: string;
}
//pending, loaded, error
// {
//   status:"pending"|"loaded"|"error"
//   data:null|<data>|string
// }
interface ResponseStatus<T> {
  status: "pending" | "loaded" | "error";
  data: null | T | string;
}
const delay = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

async function fetchURL(url: string) {
  const response = await fetch(url);
  const jsonObj = await response.json();
  await delay(5000);
  return jsonObj;
}
async function fetchPerson(id: number) {
  return fetchURL(`https://swapi.dev/api/people/${id}`);
}
export const SwapiPerson = ({ id }: SwapiPersonProps) => {
  const [responseStatus, setResponseStatus] = useState<ResponseStatus<Person>>({
    status: "pending",
    data: null,
  });
  useEffect(() => {
    async function fetchPersonInternal() {
      try {
        const personObj = await fetchPerson(id);
        setResponseStatus({
          status: "loaded",
          data: personObj,
        });
      } catch (err) {
        setResponseStatus({
          status: "error",
          data: "some error occurred",
        });
      }
    }
    setResponseStatus({
      status: "pending",
      data: null,
    });
    fetchPersonInternal();
    console.log("swappi fetch");
    return () => {
      console.log("cleanup of swapi");
    };
  }, [id]);
  let ComponentTRender;
  switch (responseStatus.status) {
    case "pending":
      ComponentTRender = () => <div>{`Loading...`}</div>;
      break;
    case "loaded":
      const person = responseStatus.data as Person;
      ComponentTRender = () => <div>{`${person.name}`}</div>;
      break;
    case "error":
      ComponentTRender = () => <div>{`${responseStatus.data as string}`}</div>;
  }
  return (
    <div className={styles.swapiPerson}>
      <ComponentTRender />
    </div>
  );
};
