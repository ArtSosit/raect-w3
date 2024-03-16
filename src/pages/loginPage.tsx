import { Button, TextField } from "@mui/material";
import { useRef } from "react";

function LocalStoragePage() {
  let nameRef = useRef<HTMLInputElement>();
  let ageRef = useRef<HTMLInputElement>();

  //localStorage.clear();
  console.log(JSON.parse(localStorage.getItem("objStr")!));

  return (
    <>
      Demo LocalStorage Page
      <br />
      <TextField inputRef={nameRef} size="small"></TextField>
      <br />
      <TextField inputRef={ageRef} size="small"></TextField>
      <br />
      <Button variant="contained" onClick={changeLocalStorage}>
        Change Local Storage
      </Button>
      <br />
      {"name: " + localStorage.getItem("name")}{" "}
      {"age: " + localStorage.getItem("age")}{" "}
      {"objStr: " + localStorage.getItem("objStr")}
    </>
  );
  function changeLocalStorage() {
    localStorage.setItem("name", nameRef.current!.value);
    localStorage.setItem("age", ageRef.current!.value);
    const obj = { name: nameRef.current!.value, age: ageRef.current!.value };
    localStorage.setItem("objStr", JSON.stringify(obj));
  }
}
export default LocalStoragePage;
