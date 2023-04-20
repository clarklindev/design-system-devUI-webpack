import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const HomeLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 4fr;
  grid-template-areas: 'navigation main';
  width: 100%;

  main {
    grid-area: main;
    padding: 25px;
  }

  nav {
    grid-area: navigation;
    height: 100%;
    width: 250px;
    position: fixed;
    overflow-y: auto;
    padding: 25px;
    border-right: 1px solid lightgray;
    display: flex;
    flex-direction: column;
  }
`;

export const HomeLayout = () => {
  return (
    <HomeLayoutContainer>
      <nav>
        <NavLink to='routing'>Routing</NavLink>
        <NavLink to='layout'>Layout</NavLink>
        <NavLink to='themes'>Themes</NavLink>
        <NavLink to='styling'>Styling</NavLink>
        <NavLink to='heading'>Heading</NavLink>
        <NavLink to='text'>Text</NavLink>
        <NavLink to='icon'>Icon</NavLink>
        <NavLink to='labelsomething'>LabelSomething</NavLink>
        <NavLink to='button'>Button</NavLink>
        <NavLink to='input'>Input</NavLink>
        <NavLink to='select'>Select</NavLink>
        <NavLink to='accordion'>Accordion</NavLink>
        <NavLink to='radiobutton'>RadioButton</NavLink>
        <NavLink to='radiobuttongroup'>RadioButton Group</NavLink>
        <NavLink to='checkbox'>Checkbox</NavLink>
        <NavLink to='checkboxgroup'>Checkbox Group</NavLink>
        <NavLink to='counter'>Counter</NavLink>
        <NavLink to='togglebutton'>Toggle Button</NavLink>
        <NavLink to='toggleswitch'>Toggle Switch</NavLink>
        <NavLink to='snackbar'>Snackbar</NavLink>
        <NavLink to='slider'>Slider</NavLink>
        <NavLink to='slidermultirange'>Slider (Multirange)</NavLink>
        <NavLink to='separator'>Separator</NavLink>
        <NavLink to='list'>List</NavLink>
        <NavLink to='table'>Table</NavLink>
        <NavLink to='card'>Card</NavLink>
        <NavLink to='hooks'>Hooks</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </HomeLayoutContainer>
  );
};
