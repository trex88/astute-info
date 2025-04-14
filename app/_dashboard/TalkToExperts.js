"use client";

import dogImage from "../../public/images/dog.jpg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Button from "../_components/Button";
import ShortForm from "../_components/ShortForm";

function TalkToExperts() {
  //   const {
  //     register,
  //     handleSubmit,
  //     reset,
  //     getValues,
  //     formState: { errors },
  //   } = useForm({
  //     defaultValues: isEditSession ? editValues : {},
  //   });

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return <ShortForm image={dogImage} alt="Image of a cute dog" />;
}

export default TalkToExperts;
