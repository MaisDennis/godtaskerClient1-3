import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  height: auto;
  width: 50%;
  padding: 8px;
  margin: 4px 4px 4px 2px;
  background-color: #fff; */

  width: 50%;
  border-radius: 8px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
  }
  padding: 8px;
  margin: 4px 4px 4px 2px;
  background-color: #fff;

.profile-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 8px 0;
  width: 100%;
  /* background-color: #4433ee; */
}

.profile-header-mobile {
  display: none;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  /* min-height: 66px; */
  width: 100%;
  /* border-radius: 4px;
  border: 1px solid #ddd; */
  padding: 8px;
  margin: 4px 0;
  background-color: #fff;
  /* background: #d13344; */
}

.left-div {
  /* background: #d13344; */
}

.center-div {
  display: flex;
  flex-direction: column;
  width: auto;
  margin-left: 16px;
/* background-color: #4433ee; */
}

.image-background {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 74px;
  width: 74px;
  overflow: hidden;
  border-radius: 50%;
  border-width: 2px;
  border-color: #18A0FB;
  background-color: #18A0FB;
}

.profile-image {
  height: 100%;
  width: auto;
  border-radius: 50%;
  border-width: 1px;
  border-color: #fff;
  background-color: #f5f5f5;
}

.user-name {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin: 4px 8px;
  color: #18A0FB;
  /* background-color: #18A3; */
}

.name-div {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 8px;
}

.name-label {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin: 2px 4px;
  color: #000;
  /* background-color: #4433ee; */
}

.followers-div {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px;
}

.followers-tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
}

.number-label {
  font-weight: bold;
  margin-right: 4px;
}

.followers-label {

}

.body {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: #999; */
}

.social-media-div {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px 0 4px;
  /* background-color: #4433ee; */
}

.social-media-tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 12px;
  /* background-color: #4ee; */
}

.social-media-label {
  margin: 0 0 0 4px;
}

.bio-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4px 0 8px;
  /* background-color: #f00; */
}

.bold-label {
  font-weight: bold;
  text-align: left;
  width: 100%;
  padding: 0 8px;
  margin: 4px;
  /* background-color: #f00; */
}

.bio-div {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 16px;
  padding-bottom: 24px;
  margin-bottom: 24px;
  /* background-color: #4ee; */
}

.bio-text {
  /* background-color: #999; */
}

  @media (max-width: 1400px) {
    padding: 4px;
  }

  @media (max-width: 620px) {
    display: ${({ toggleContainer }) => (
      toggleContainer === 2 ? 'block' : 'none'
    )};
    width: 100%;
    margin: 4px 0;
    /* background-color: #ffc87c; */

    .profile-header {
      display: none;
    }

    .profile-header-mobile {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      margin: 8px 0;
      width: 100%;
      /* background-color: #4ee; */
    }


  }


`;
