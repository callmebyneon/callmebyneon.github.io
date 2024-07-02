import styled from '@emotion/styled'

const ThemingButton = styled.button`
  width: 26px;
  height: 26px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: transparent;
  border: transparent;
`

const ThemingButtonIcons = styled.div`
  width: 26px;
  height: 52px;
  display: flex;
  flex-direction: column;
  transform: rotate(360deg);
  transition: transform ease-out 200ms;

  [data-dark='true'] & {
    transform: rotate(180deg);
  }
`

const ThemeToggleButton = function () {
  return (
    <ThemingButton>
      <ThemingButtonIcons>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0001 4.33332V2.16666M13.0001 21.6667V23.8333M6.94881 6.94872L5.41675 5.41666M19.2054 19.2054L20.7375 20.7374M4.33341 13H2.16675M21.6667 13H23.8334M19.206 6.94872L20.738 5.41666M6.94934 19.2054L5.41728 20.7374M13.0001 18.4167C10.0085 18.4167 7.58341 15.9915 7.58341 13C7.58341 10.0084 10.0085 7.58332 13.0001 7.58332C15.9916 7.58332 18.4167 10.0084 18.4167 13C18.4167 15.9915 15.9916 18.4167 13.0001 18.4167Z"
            stroke="#1E2126"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.25 19.5C16.25 14.1152 11.8848 9.74998 6.5 9.74998C5.51497 9.74998 4.56406 9.89567 3.66775 10.1673C4.88117 6.16384 8.60026 3.25013 13 3.25013C18.3848 3.25013 22.75 7.61506 22.75 12.9998C22.75 17.3996 19.8358 21.1187 15.8323 22.3321C16.1039 21.4358 16.25 20.485 16.25 19.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ThemingButtonIcons>
    </ThemingButton>
  )
}

export default ThemeToggleButton
