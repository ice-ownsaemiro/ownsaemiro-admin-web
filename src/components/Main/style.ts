import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const MainContent = styled.main`
  margin: 30px;
  flex-grow: 1;
  padding: 20px;
`;

export const Sidebar = styled.aside`
  width: 300px;
  height: 100vh;
  background-color: #5c6ed0;
  color: white;
  padding: 20px;
  position: relative;
  transition:
    background-color 0.3s,
    color 0.3s;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin: 10px 10px 80px 10px;
`;

export const Menu = styled.div``;

export const MenuItem = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border: 0px;
  border-radius: 10px;
  margin-bottom: 20px;

  &.active {
    background-color: #7d8bd9;
  }

  &:hover {
    background-color: #7d8bd9;
  }
`;

export const MenuImage = styled.img`
  padding: 15px;
`;

export const MenuText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 10px 20px;
`;

export const UserContainer = styled.div`
  position: absolute;
  bottom: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  padding: 15px;
`;

export const Username = styled.span`
  font-size: 18px;
`;

export const LogoutButton = styled.img`
  font-size: 16px;
  color: #fff;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  margin-left: auto;
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #98a9f0;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

export const FilterTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  background-color: #f8fcff;
  margin-bottom: 25px;
  padding: 20px 40px;
  gap: 30px;
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.div`
  width: 30vw;
  height: 27px;
  border-radius: 5px;
  border: 2px solid #e5e5e5;
  display: flex;
  align-items: center;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  border: none;
  padding-left: 10px;
  font-size: 15px;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.img`
  font-size: 15px;
  margin-left: 5px;
`;

export const Select = styled.select`
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  padding: 5px;
  font-size: 15px;
  color: #555;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const ApprovedBtn = styled.button`
  width: 112px;
  height: 36px;
  margin-top: 10px;
  padding: 10px 0;
  border: none;
  background-color: #576fd7;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.approve {
    background-color: #576fd7;
    color: white;
  }

  &.reject {
    background-color: white;
    color: #7e7e7e;
    border: 1px solid #576fd7;
  }
`;

export const Button = styled.button`
  width: 112px;
  height: 36px;
  margin-top: 10px;
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.approve {
    background-color: #576fd7;
    color: white;
  }

  &.reject {
    background-color: white;
    color: #7e7e7e;
    border: 1px solid #576fd7;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  text-align: center;
`;

export const Th = styled.th`
  color: #999;
  padding: 15px;
  border-bottom: 2px solid #e5e5e5;
  background-color: #f8fcff;
`;

export const Td = styled.td<{ state?: string }>`
  color: #555;
  padding: 15px;
  border-bottom: 2px solid #e5e5e5;

  ${({ state }) =>
    state === "REJECT" &&
    css`
      color: #eb5a5a;
    `}

  ${({ state }) =>
    state === "COMPLETE" &&
    css`
      color: #576fd7;
    `}

  ${({ state }) =>
    state === "WAITING" &&
    css`
      color: #67a238;
    `}
`;

export const Tr = styled.tr`
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;

  button {
    font-size: 20px;
    color: #555;
    border: none;
    background-color: transparent;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;

    &:hover {
      color: #576fd7;
    }
  }
`;

export const Approved = styled(Td)`
  color: #576fd7;
`;

export const Rejected = styled(Td)`
  color: #eb5a5a;
`;

export const Standby = styled(Td)`
  color: #67a238;
`;
