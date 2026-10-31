import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
useLoaderData

export default function Github() {
    const data = useLoaderData()
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Rupayan-san')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    return(
        <>
        Github followers: {data.followers}
        </>
    )
}

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Rupayan-san')
    return response.json()
}