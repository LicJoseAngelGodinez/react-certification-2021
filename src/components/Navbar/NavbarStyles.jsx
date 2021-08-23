import styled from 'styled-components'

const NavbarStyles = styled.div`

    *{
        --navbar-font-color: #fff;
        --input-purple-dark: #630063;
        --input-purple-light: #8a1d8a;
        --input-placeholder: #c7c7c7;
    }

    .navbar__wrapper,
    .navbar__left,
    .navbar__right,
    .navbar__menu,
    .navbar__search,
    .navbar__theme,
    .navbar__account {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navbar__right {
        @media only screen and (max-width: 669px) {
            display: none;
        }
    }

    .navbar__wrapper {
        background-color: purple;
        color: var(--navbar-font-color);
        position: fixed;
        width: 100%;
        height: 50px;
    }

    .navbar__wrapper.dark {
        background-color: #565656;
    }

    .navbar__menu {
        margin: 0 .8rem;
    }

    .navbar__search {
        background-color: var(--input-purple-dark);
        padding: .3rem .5rem;
        border-radius: 5px;
        width: 100%;
        :hover {
            background-color: var(--input-purple-light);
        }
        input {
            background-color: var(--input-purple-dark);
            border-style: none;
            width: 100%;
            color: var(--navbar-font-color);
            margin: 0 .3rem;
            ::placeholder {
                color: var(--input-placeholder);
            }
            &:focus {
                background-color: var(--input-purple-light);
                outline: none;
            }
        }
    }

    .navbar__theme {
        label {
            margin-right: .5rem;
            font-size: 15px;
        }
    }

    .navbar__account {
        margin-right: .3rem;
    }
    .dark .navbar__account {
        color: cyan; 
    }

`;

export default NavbarStyles;