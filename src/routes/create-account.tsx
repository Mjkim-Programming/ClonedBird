import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components"
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:420px;
    padding:50px 0px;
`;

const Form = styled.form`
    margin-top:50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const Input = styled.input`
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    width: 100%;
    font-size: 16px;
    &[type="submit"] {
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
`;

const Title = styled.h1`
    font-size: 42px;
`;

const Error = styled.span`
    font-weight: 600;
    color: tomato;
`

//! This is until 5:31 of 2-1 Froms and UI

export default function CAccount() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {name,value}} = e;
        if(name === "name") {
            setName(value);
        } else if(name === "password") {
            setPassword(value);
        } else if(name === "email") {
            setEmail(value);
        }
    }

    const onSubmit = async(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(isLoading || name === "" || email === "" || password === "") return;
        try {
            setLoading(true);
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(credentials.user);
            await updateProfile(credentials.user, {
                displayName: name,
            });
            navigate("/");
        } catch(e) {
            // setError("Error");
        } finally {
            setLoading(false);
        }
    } 

    return(
        <>
            <Wrapper>
                <Title>Join ClonedBird</Title>
                <Form onSubmit={onSubmit}>
                    <Input name="name" onChange={onChange} value={name} placeholder="Name" type="text" required/>
                    <Input name="email" onChange={onChange} value={email} placeholder="Email" type="email" required/>
                    <Input name="password" onChange={onChange} value={password} placeholder="PassWord" type="password" required/>
                    <Input type="submit" onChange={onChange} value={isLoading ? "Loading..." : "Create Account"}/>
                </Form>
                {/*{error !== "" ? <Error></Error>:null}*/}
            </Wrapper>
        </>
    )
}