import React from 'react'
import { z } from "zod";

export const signUpFormSchema = z.object({
    fullName: z.string( "please enter your name"),

    email: z
      .string( "please enter string")
      .email("enter valid email"),

    number: z
    .string("Please enter number")
    .regex(/^\d{10}$/, "Please enter a valid 10-digit number"),

    password: z
      .string(" please enter password" )
      .min(8, "password should be 8 characters"),
  });

  export const signInFormSchema = z.object({
   
    email: z
      .string( "please enter string")
      .email("enter valid email"),


    password: z
      .string(" please enter password" )
      .min(8, "password should be 8 characters"),
  });


