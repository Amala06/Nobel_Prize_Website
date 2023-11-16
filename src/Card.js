import React, { useEffect, useState } from 'react'
import './card.css'
const Card = () => {

    const[newName,setName]=useState("");
    const [desc, setDesc] = useState("");
      const [id, setId] = useState("1");
      console.log(id)

      const fun=()=>{
        if(id==="1"){
            setName("MARIE CURIE");
            setDesc(
              "  She received the Nobel Prize in Physics in 1903 (shared with Pierre Curie and Henri Becquerel) for their joint research on the radiation phenomena. Marie Curie also received the Nobel Prize in Chemistry in 1911 for her services to the advancement of chemistry by the discovery of the elements radium and polonium, by the isolation of radium and the study of the nature and compounds of this remarkable element.She received the Nobel Prize in Physics in 1903 (shared with Pierre Curie and Henri Becquerel) for their joint research on the radiation phenomena. Marie Curie also received the Nobel Prize in Chemistry in 1911 for her services to the advancement of chemistry by the discovery of the elements radium and polonium, by the isolation of radium and the study of the nature and compounds of this remarkable element."
            );
        }
          else if (id === "2") {
            setName("LINUS PAULING");
            setDesc(
              "He received the Nobel Prize in Chemistry in 1954 for his research into the nature of the chemical bond and its application to the elucidation of the structure of complex substances. Later, he received the Nobel Peace Prize in 1962 for his activism against nuclear weapons testing.He received the Nobel Prize in Chemistry in 1954 for his research into the nature of the chemical bond and its application to the elucidation of the structure of complex substances. Later, he received the Nobel Peace Prize in 1962 for his activism against nuclear weapons testing.He received the Nobel Prize in Chemistry in 1954 for his research into the nature of the chemical bond and its application to the elucidation of the structure of complex substances. Later, he received the Nobel Peace Prize in 1962 for his activism against nuclear weapons testing"
            );
          }
           else if (id === "3") {
              setName("JOHN BARDEEN, LEON COOPER , and ROBERT SCHRIEFFER");
              setDesc(
                "They collectively received the Nobel Prize in Physics in 1972 for their jointly developed theory of superconductivity, usually called the BCS-theory.They collectively received the Nobel Prize in Physics in 1972 for their jointly developed theory of superconductivity, usually called the BCS-theory.They collectively received the Nobel Prize in Physics in 1972 for their jointly developed theory of superconductivity, usually called the BCS-theory.They collectively received the Nobel Prize in Physics in 1972 for their jointly developed theory of superconductivity, usually called the BCS-theory.They collectively received the Nobel Prize in Physics in 1972 for their jointly developed theory of superconductivity, usually called the BCS-theory.They collectively received the Nobel Prize in Physics in 1972 for their jointly developed theory of superconductivity, usually called the BCS-theory."
              );
            }
            else  if (id === "4") {
                setName("FREDRICK SANGER");
                setDesc(
                  "He received the Nobel Prize in Chemistry in 1958 for his work on the structure of proteins, especially that of insulin. Sanger received the Nobel Prize again in 1980, sharing it with Paul Berg and Walter Gilbert, for their contributions concerning the determination of base sequences in nucleic acids.He received the Nobel Prize in Chemistry in 1958 for his work on the structure of proteins, especially that of insulin. Sanger received the Nobel Prize again in 1980, sharing it with Paul Berg and Walter Gilbert, for their contributions concerning the determination of base sequences in nucleic acids.He received the Nobel Prize in Chemistry in 1958 for his work on the structure of proteins, especially that of insulin. Sanger received the Nobel Prize again in 1980, sharing it with Paul Berg and Walter Gilbert, for their contributions concerning the determination of base sequences in nucleic acids.He received the Nobel Prize in Chemistry in 1958 for his work on the structure of proteins, especially that of insulin. "
                );
              }
      }

      useEffect(() => {
        fun();
      }, [id]);


  return (
    <div className="amaze">
      <p className="title">
        <u>AMAZING FACTS</u>
      </p>
      <p className="sub_title">(Click on the images to explore more)</p>
      <div className="main_content_card">
        <div className="main_image_">
          <div
            id="1"
            className="image_content"
            onClick={(e) => {
              setId("1");
            }}
          >
            {id === "1" ? (
              <img src="images/mc.jpg" alt="" />
            ) : (
              <img
                src="images/mc.jpg"
                alt=""
                style={{ filter: "grayscale(100%)" }}
              />
            )}
          </div>
          <div
            id="2"
            className="image_content"
            onClick={(e) => {
              setId("2");
            }}
          >
            {id === "2" ? (
              <img src="images/l.png" alt="" />
            ) : (
              <img
                src="images/l.png"
                alt=""
                style={{ filter: "grayscale(100%)" }}
              />
            )}
          </div>

          <div
            id="3"
            className="image_content"
            onClick={(e) => {
              setId("3");
            }}
          >
            {id === "3" ? (
              <img src="images/3.png" alt="" />
            ) : (
              <img
                src="images/3.png"
                alt=""
                style={{ filter: "grayscale(100%)" }}
              />
            )}
          </div>
          <div
            id="4"
            className="image_content"
            onClick={(e) => {
              setId("4");
            }}
          >
            {id === "4" ? (
              <img src="images/ff.png" alt="" />
            ) : (
              <img
                src="images/ff.png"
                alt=""
                style={{ filter: "grayscale(100%)" }}
              />
            )}
          </div>
        </div>
        <div className="main_card_text">
          <p className="card_name_">{newName}</p>
          <p className="card_desc">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card