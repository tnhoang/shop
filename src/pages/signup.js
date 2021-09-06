import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { signUp } from "../api";
import { Text } from "../components/base";
import { FONT } from "../constants/css";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(5),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const fields = [
  {
    name: "username",
    type: "text",
  },
  {
    name: "password",
    type: "password",
  },
  {
    name: "passwordConfirmation",
    type: "password",
  },
];

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      await mutateAsync({
        username: data.username,
        password: data.password,
      });
    } catch (error) {
      console.table(error);
    }
  };

  const history = useHistory();

  const { error, isLoading, mutateAsync } = useMutation("signUp", signUp, {
    onSuccess: ({ message }) => {
      history.push("/signin");
    },
  });
  return (
    <Container>
      <HeaderWrapper>
        <Text fontSize={FONT.xlarge}>Sign Up</Text>
      </HeaderWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((input, key) => {
          return (
            <div key={key}>
              <input
                {...register(input.name)}
                // name={input.name}
                placeholder={input.name}
                style={{ width: "100%" }}
                type={input.type}
                // bordered
                // size="large"
              />
              <p style={{ color: "red", textAlign: "left" }}>
                {errors[input.name]?.message}
              </p>
            </div>
          );
        })}
        <div style={{ color: "red" }}>{error?.message}</div>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          shape="round"
          size="large"
          block
        >
          Register
        </Button>
      </form>
      <span>
        Have an account?{" "}
        <span
          onClick={() => history.push("signin")}
          style={{ color: "#1790FF", cursor: "pointer", marginTop: "10px" }}
        >
          Login here
        </span>
      </span>
    </Container>
  );
}

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  padding-top: 120px;
  padding-left: 22px;
  padding-right: 22px;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 20px;
`;
