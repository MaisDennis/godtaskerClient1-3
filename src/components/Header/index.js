import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
// -----------------------------------------------------------------------------
import logo from '~/assets/godtaskerFont/GroupgodtaskerFontPlainBlack.svg';
import insert from '~/assets/insert_photo-24px.svg';
import { signOutUser } from '~/store/modules/user/actions';
import { signOutPhonenumber } from '~/store/modules/phonenumber/actions';
import { signOut } from '~/store/modules/auth/actions';
import { Container, ScrollLink } from './styles';
import Button from '../Buttons'
// -----------------------------------------------------------------------------
export default function Header({
  headerMenu, setHeaderMenu,
}) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [dropMenu, setDropMenu] = useState();
  const [ toggleSideBar, setToggleSideBar] = useState(false);
  const [ toggleScreen, setToggleScreen] = useState(false);
  // console.log(toggleSideBar)

  async function handleSignOut() {
    await dispatch(signOutUser(null))
    await dispatch(signOutPhonenumber(null, false))
    await dispatch(signOut());
  }

  function toggleSide() {
    setToggleSideBar(!toggleSideBar)
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <div className="header-wrapper">
        <div className="button-div">
          <Button type="01" onClick={() => setHeaderMenu(0)}>
            New Task
          </Button>
        </div>
        <div className="button-mobile-div">
          <Button type="08" onClick={() => setHeaderMenu(0)}>
            New Task
          </Button>
        </div>

        <div className="mobile-chat-button-div">
          <ScrollLink
            to="mobileMain"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            // offset={-80}
            onClick={() => console.log('click')}
          >
            { toggleScreen === false
              ? (
                <Button type="09">
                  Main
                </Button>
              )
              : (
                <Button type="10" onClick={() => setToggleScreen(false)}>
                  Main
                </Button>
              )
            }
          </ScrollLink>
          <ScrollLink
            to="mobileMessage"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            // offset={-80}
            onClick={() => console.log('click')}
          >
            { toggleScreen === false
              ? (
                <Button type="10" onClick={() => setToggleScreen(true)}>
                  Chat
                </Button>
              )
              : (
                <Button type="09">
                  Chat
                </Button>
              )
            }
          </ScrollLink>
        </div>

        <ul className="header-menu">
          <li className="header-menu-item">

            { headerMenu === 1
              ? (
                <button className="header-button selected" onClick={() => setHeaderMenu(1)}>
                  <label className="header-label-selected" >Sent Tasks</label>
                </button>
              )
              : (
                <button className="header-button" onClick={() => setHeaderMenu(1)}>
                  <label className="header-label" >Sent Tasks</label>
                </button>
              )
            }

          </li>
          <li className="header-menu-item">
            { headerMenu === 2
              ? (
                <button className="header-button selected" onClick={() => setHeaderMenu(2)}>
                  <label className="header-label-selected" >Received Tasks</label>
                </button>
              )
              : (
                <button className="header-button" onClick={() => setHeaderMenu(2)}>
                  <label className="header-label" >Received Tasks</label>
                </button>
              )
            }
          </li>
          <li className="header-menu-item">
            { headerMenu === 3
              ? (
                <button className="header-button selected" onClick={() => setHeaderMenu(3)}>
                  <label className="header-label-selected" >Dashboard</label>
                </button>
              )
              : (
                <button className="header-button" onClick={() => setHeaderMenu(3)}>
                  <label className="header-label" >Dashboard</label>
                </button>
              )
            }
          </li>
          <li className="header-menu-item">
              { headerMenu === 5
                ? (
                  <button className="header-button selected" onClick={() => setHeaderMenu(5)}>
                    <label className="header-label-selected">Search People</label>
                  </button>
                )
                : (
                  <button className="header-button" onClick={() => setHeaderMenu(5)}>
                    <label className="header-label">Search People</label>
                  </button>
                )
              }
          </li>
        </ul>

        <aside className="header-aside">
          <div className="drop-down-div">
            <div className="profile" onClick={() => setDropMenu(!dropMenu)}>
              {!profile.avatar
                ? (
                  <div className="image-background-div">
                    <img
                      className="image-user"
                      src={insert} alt="User"
                    />
                  </div>
                )
                : (
                  <div className="image-background-div">
                    <img
                      className="image-user"
                      src={profile.avatar.url}
                      alt="User"
                    />
                  </div>
                )
              }

            </div>
            { dropMenu && (
              <div className="drop-menu">
                <strong className="profile-strong">
                  {profile.user_name}
                </strong>
                <Link to="/profile">
                  <button className="drop-menu-button">
                    <label className="drop-menu-label">Edit Profile</label>
                  </button>
                </Link>
                <button className="drop-menu-button" onClick={handleSignOut}>
                  <label className="drop-menu-label">Exit</label>
                </button>

              </div>
            )}
          </div>

          <img
            className="image-logo"
            src={logo}
            alt="gerenteDash"
          />
        </aside>

        <aside className="mobile-sidebar">
          <div className="icon-div">
            <FaBars color={'#fff'} size={24} onClick={() => toggleSide()}/>
          </div>
        </aside>

        { toggleSideBar
          ? (
            <div className="sidebar-div">
              <div className="icon-close-div">
                <FaTimes color={'#fff'} size={24} onClick={() => toggleSide()}/>
              </div>
              <ul className="sidebar-menu">
                <li className="header-menu-item">

                  { headerMenu === 1
                    ? (
                      <button
                        className="header-button selected"
                        onClick={() => {
                          setHeaderMenu(1)
                          toggleSide()
                        }}
                      >
                        <label className="header-label-selected" >Sent Tasks</label>
                      </button>
                    )
                    : (
                      <button
                        className="header-button"
                        onClick={() => {
                          setHeaderMenu(1)
                          toggleSide()
                        }}
                      >
                        <label className="header-label" >Sent Tasks</label>
                      </button>
                    )
                  }

                </li>
                <li className="header-menu-item">
                  { headerMenu === 2
                    ? (
                      <button
                        className="header-button selected"
                        onClick={() => {
                          setHeaderMenu(2)
                          toggleSide()
                        }}
                      >
                        <label className="header-label-selected" >Received Tasks</label>
                      </button>
                    )
                    : (
                      <button
                        className="header-button"
                        onClick={() => {
                          setHeaderMenu(2)
                          toggleSide()
                        }}
                      >
                        <label className="header-label" >Received Tasks</label>
                      </button>
                    )
                  }
                </li>
                <li className="header-menu-item">
                  { headerMenu === 3
                    ? (
                      <button
                        className="header-button selected"
                        onClick={() => {
                          setHeaderMenu(3)
                          toggleSide()
                        }}
                      >
                        <label className="header-label-selected" >Dashboard</label>
                      </button>
                    )
                    : (
                      <button
                        className="header-button"
                        onClick={() => {
                          setHeaderMenu(3)
                          toggleSide()
                        }}
                      >
                        <label className="header-label" >Dashboard</label>
                      </button>
                    )
                  }
                </li>
                <li className="header-menu-item">
                    { headerMenu === 5
                      ? (
                        <button
                          className="header-button selected"
                          onClick={() => {
                            setHeaderMenu(5)
                            toggleSide()
                          }}
                        >
                          <label className="header-label-selected">Search People</label>
                        </button>
                      )
                      : (
                        <button
                          className="header-button"
                          onClick={() => {
                            setHeaderMenu(5)
                            toggleSide()
                          }}
                        >
                          <label className="header-label">Search People</label>
                        </button>
                      )
                    }
                </li>
                <li className="header-menu-item">
                    { headerMenu === 6
                      ? (
                        <Link to="/profile">
                          <button className="header-button selected">
                            <label className="header-label-selected">Edit Profile</label>
                          </button>
                        </Link>
                      )
                      : (
                        <Link to="/profile">
                          <button className="header-button">
                            <label className="header-label">Edit Profile</label>
                          </button>
                        </Link>
                      )
                    }
                </li>
                <li className="header-menu-item">
                    { headerMenu === 7
                      ? (
                        <button className="header-button selected" onClick={handleSignOut}>
                          <label className="header-label-selected">Exit</label>
                        </button>
                      )
                      : (
                        <button className="header-button" onClick={handleSignOut}>
                          <label className="header-label">Exit</label>
                        </button>
                      )
                    }
                </li>
              </ul>
            </div>
          )
          : (
            null
          )

        }

      </div>
    </Container>
  );
}
