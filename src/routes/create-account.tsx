import { useState } from "react";
import styled from "styled-components"

const Wrapper = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

//! This is until 5:31 of 2-1 Froms and UI

export default function CAccount() {
    const [isLoading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

    return(
        <>
            <Wrapper>
                <Form>
                    <Input name="name" onChange={onChange} value={name} placeholder="Name" type="text" required/>
                    <Input name="email" onChange={onChange} value={email} placeholder="Email" type="email" required/>
                    <Input name="password" onChange={onChange} value={password} placeholder="PassWord" type="password" required/>
                    <Input type="submit" onChange={onChange} value="Create Account"/>
                </Form>
            </Wrapper>
        </>
    )
}