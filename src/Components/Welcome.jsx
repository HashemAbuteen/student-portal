import React from "react";
import { useParams } from "react-router-dom";

export default function Welcome(){
    return (<h1>welcome {useParams().message}</h1>);
}