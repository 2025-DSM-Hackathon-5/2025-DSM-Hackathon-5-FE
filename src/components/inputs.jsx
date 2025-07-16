import React from "react";
import styled from "styled-components";

function Inputs() {
  return (
    <Wrapper>
      <Title>Inputs</Title>
      <SearchInput>
        <FiSearch />
        <input placeholder="검색" />
      </SearchInput>

      <SearchInputOutlined>
        <FiSearch />
        <input placeholder="검색" />
      </SearchInputOutlined>

      <BasicInput placeholder="아이디" />
    </Wrapper>
  );
}

export default Inputs;

const Wrapper = styled.div`
  padding: 32px;
  font-family: sans-serif;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
`;

// 1
const SearchInput = styled.div`
  background-color: #f2f2f5;
  border-radius: 999px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  svg {
    color: #999;
    font-size: 20px;
  }

  input {
    border: none;
    outline: none;
    background: none;
    font-size: 16px;
    color: #333;
    flex: 1;
  }
`;

// 2
const SearchInputOutlined = styled(SearchInput)`
  background-color: white;
  border: 2px solid #5b2eff;

  svg {
    color: #5b2eff;
  }

  input {
    color: black;
  }
`;

// 3
const BasicInput = styled.input`
  background-color: #f9f9f9;
  border: none;
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 16px;
  width: 100%;
  outline: none;
  color: #333;
  margin-bottom: 20px;

  &::placeholder {
    color: #aaa;
  }
`;
