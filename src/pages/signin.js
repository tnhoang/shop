import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { signIn } from "../api";
import { Text } from "../components/base";
import { FONT } from "../constants/css";
import LocalStorageService from "../store/localStorageService";

const schema = yup.object().shape({
  username: yup.string(),
  password: yup.string().required().min(5),
});

const loginFields = [
  {
    name: "username",
    type: "text",
  },
  {
    name: "password",
    type: "password",
  },
];

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const { error, isLoading, mutateAsync } = useMutation("login", signIn, {
    onSuccess: ({ access_token, refresh_token }) => {
      LocalStorageService.setToken({ access_token, refresh_token });
      history.push("/");
    },
  });
  return (
    <Container>
      <HeaderWrapper>
        <Text fontSize={FONT.xlarge}>Login</Text>
      </HeaderWrapper>
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            console.log("before async");
            await mutateAsync({
              username: data.username,
              password: data.password,
            });
          } catch (error) {
            console.log(error);
          }
        })}
      >
        {loginFields.map((input, key) => {
          return (
            <div key={key}>
              <input
                placeholder={input.name}
                style={{ width: "100%" }}
                type={input.type}
                bordered
                size="large"
                {...register(input.name)}
              />
              <p>{errors[input.name]?.message}</p>
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
          Log In
        </Button>
      </form>
      <span>
        Don't have an account?{" "}
        <span
          style={{ color: "#1790FF", cursor: "pointer" }}
          onClick={() => history.push("signup")}
        >
          Register here
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
