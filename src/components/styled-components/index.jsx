import { AiFillHome } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdWhatshot } from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { Link } from "react-router-dom";
import styled from "styled-components";

// App
export const AppSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

// LoginPage
export const LoginSection = styled.div`
    background-color: ${(props) => props.$isdark ? 'black' : 'white'};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const Form = styled.form`
    background-color: ${(props) => props.$isdark ? ' #313131' : 'white'};
    color: ${(props) => props.$isdark ? 'white' : 'black'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 2px ${(props) => props.$isdark ? '#606060' : 'rgba(0, 0, 0, 0.1)'};
    width: 300px;

    @media screen and (max-width: 576px) {
        width: 90%;
        padding: 16px;
    }
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 2px solid ${(props) => props.$isdark ? ' #909090' : '#f1f5f9'};
  padding: 7px 20px;
  width: 250px;
  background-color: transparent;
  border-radius: 5px;
  color:${(props) => props.$isdark ? 'white' : 'black'}
`;

export const WebsiteLogo = styled.img`
  width: 200px;
  margin: 20px;
  margin-bottom: 30px;

  @media screen and (max-width:320px) {
    width:150px;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  color: ${(props) => props.$isdark ? '#ffffff' : '#64748b'} ;
`;

export const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  width: 100%;
  margin-top: 10px;
  padding:10px;
`;

export const ErrMsg = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 0px;
`;

// Header
export const HeaderDashboardSection = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) => (props.$isdark ? "black" : "white")};
  color: ${(props) => (props.$isdark ? "white" : "black")};
  position:fixed;
  z-index:5;
`;

// export const HeaderSection = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 100%;
// `;



export const HeaderRightItems = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UserProfile = styled(WebsiteLogo)`
  width: 40px;
  height: 40px;
  border-radius: 15px;

  @media screen and (max-width: 860px) { 
    display:none;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 860px) {
    display: block;
  }
`

export const MoonImage = styled(FaMoon)`
  // margin-top: 25px;
  cursor: pointer;
  font-size:35px;
  padding-bottom:15px;

  @media screen and (max-width:860px) {
    font-size: 25px;
    // margin-top: 25px;
    padding-bottom:5px;
  }
`

export const SunImage = styled(FaSun)`
  cursor: pointer;
  font-size:35px;
  padding-bottom:15px;

  @media screen and (max-width: 860px) {
    font-size: 25px;
    padding-bottom:5px;
  }
`;

export const LogoutButton = styled.button`
  border: 2px solid #3b82f6;
  border-radius: 5px;
  color: #3b82f6;
  font-weight: bold;
  margin-right: 20px;
  height: 40px;
  background-color: transparent;
  text-align: center;
  margin-bottom:10px;
  padding: 5px 10px;

  @media screen and (max-width: 861px) {
    display: none;
  }
`;

export const LogoutIconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  // margin-bottom:10px;
  padding-bottom:5px;
  color: ${(props) => props.$isdark ? 'white' : 'black'};
  font-size:24px;
  padding:0px;
  padding-right:15px;

  @media screen and (min-width: 861px) {
    display: none;
  }
`

//Dashboard section
export const DashBoardSection = styled(HeaderSection)`
  flex-direction: column;
  width: 180px;
  justify-content: space-between;
  padding-top:90px;
  padding-right:10px;
  background-color:${(props) => props.$isdark ? 'black' : 'white'};
  color:${(props) => props.$isdark ? 'white' : 'black'};
  height:calc(100% - 80px);
  position:fixed;

  @media screen and (max-width: 860px) {
    display:none;
  }
`;

export const ListItems = styled.ul`
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding: 0px;
`;

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  margin: 5px 0 10px 0;
  padding: 5px 10px 5px 0px;
  cursor:pointer;
  background-color: ${(props) =>
    props.$isActive
      ? props.$isdark
        ? "#424242"
        : "#ebebeb"
      : props.$isdark
        ? "black"
        : "white"};
  color: ${(props) => props.$isdark ? 'white' : 'black'}
`;

export const HomeIcon = styled(AiFillHome)`
  margin-top: 5px;
  margin-right: 20px;
  margin-left: 30px;
  color: ${(props) => (props.$isActive ? "red" : "#606060")};
`;

export const TrendingIcon = styled(MdWhatshot)`
  margin-top: 5px;
  margin-right: 20px;
  margin-left: 30px;
  color: ${(props) => (props.$isActive ? "red" : "#606060")};
`;

export const GamingIcon = styled(SiYoutubegaming)`
  margin-top: 5px;
  margin-right: 20px;
  margin-left: 30px;
  color: ${(props) => (props.$isActive ? "red" : "#606060")};
`;

export const SavedVideosIcon = styled(RiMenuAddLine)`
  margin-top: 5px;
  margin-right: 20px;
  margin-left: 30px;
  color: ${(props) => (props.$isActive ? "red" : "#606060")};
`;

export const ContactSection = styled.div`
  justify-self:flex-end;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  padding: 5px;
`;

export const ContactUsLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 70%;
`;

export const ContactImage = styled.img`
  width: 30px;
  height: 30px;
`;

// Home
export const HomePage = styled.div`
    width:100%;
    height:100%;
    background-color:${(props) => props.$isdark ? 'black' : 'white'};
    color:${(props) => props.$isdark ? 'white' : 'black'};
`;
export const HomeSection = styled.div`
  width: 100%;
  height: calc(100% - 160px);
  display:flex;
  flex-direction:row;
  background-color:${(props) => props.$isdark ? 'black' : 'white'};
  color:${(props) => props.$isdark ? 'white' : 'black'};
`;

export const HomeContainer = styled.div`
    width:100%;
    margin-top:80px;
    padding-left:190px;
    overflow-y:auto;
    height:calc(100% + 80px);

    @media screen and (max-width:860px) {
      padding-left:0px;
    }
`;

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size:cover;
  width:100%;
  height:250px;
  position:relative;

  @media screen and (max-width: 321px) {
    height: 200px;
    padding:10px;
  }

  @media screen and (min-width: 322px) and (max-width: 576px) {
    height: 200px;
    padding:10px;
  }
`;

export const BannerLogo = styled(WebsiteLogo)`
    width:200px;
    @media screen and (max-width: 480px){
        width:80px;
        height:30px;
        margin:0px;
    }
`;

export const BannerContent = styled.div`
    text-align:start;
    width:40%;
    color:black;
    padding:10px;
    @media screen and (max-width: 480px) {
        padding:0px;
    }
`;

export const BannerButtonWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center
`

export const BannerCrossButton = styled.span`
    background: transparent;
    color: black;
    font-size: 18px;
    border: none;
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: block;
    padding: 8px 0px 6px 0px;
`;

export const GetPremiumBtn = styled(LogoutButton)`
    border-color:#231f20;
    color:#231f20;
    align-items:center;
    padding-bottom:30px;
    font-size:16px;

    @media screen and (max-width:860px){
        display: block;
        font-size: 12px;
        width: 100px;
        height: 30px;
        padding-bottom: 15px;
    }
`;

export const HomeVideosContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:${(props) => props.$isdark ? "#606060" : '#f9f9f9'};
    height:${(props) => props.$bannerShown ? '' : '100%'};
    width:100%;
`;

export const SearchBar = styled.div`
    display:flex;
    flex-direction:row;
    margin:10px 0px 5px 10px;
    width:40%;
    height:30px;
    border:1px solid #1e293b;
`;

export const SearchInput = styled.input`
    width:90%;
    padding:5px;
    height:30px;
    border:1px solid #1e293b;
    background-color:${(props) => props.$isdark ? 'black' : 'white'};
    color:${(props) => props.$isdark ? 'white' : 'black'};

    &:focus {
      outline:none;
    }
`;

export const SearchIcon = styled(IoIosSearch)`
    border:1px solid #1e293b;
    align-self:center;
    width:10%;
    // padding:2px;
    height:30px;
`;

export const HomeVideosSection = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
`;

export const NoResultsSection = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:auto;
    text-align:center;
    padding: 20px;

    @media screen and (max-width: 321px) {
      height:280px;
    }

    @media screen and (min-width: 322px) and (max-width: 376px) {
      height:300px;
    }

    @media screen and (min-width:377px) and (max-width: 426px){
      height:320px;
    }
    
    @media screen and (min-width:427px) and (max-width:769px){
      height:300px;
    }
`;

export const NoResultsImg = styled.img`
    width:300px;
    height:200px;

    @media screen and (max-width: 321px) {
      width:200px;
      height:100px;
    }

    @media screen and (min-width: 321px) and (max-width: 376px) {
      width:250px;
      height:150px;
    }
    
    @media screen and (min-width: 377px) and (max-width: 426px) {
      width:270px;
      height:170px;
    }
`;

export const NoResultsMessage = styled.p`
    color: #999;
    font-size: 18px;
    margin-top:0px;
`

export const RetryButton = styled(Button)`
    background-color: #4f46e5;
    width:100px;
`;

//Popup-card
export const PopupCardSection = styled.div`
    display:flex;
    flex-direction:column;
    height:150px;
    width:300px;
    text-align:center;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    position:relative;
    padding:5px 20px 5px 20px;
    background-color:${(props) => props.$isdark ? 'black' : 'white'};
    color:${(props) => props.$isdark ? '#ebebeb' : 'black'}};

    @media screen and (max-width: 460px) {
      width:100%;
      height:150px;
    }
`;

export const PopupButtonsSection = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
`;

export const PopupButton = styled.button`
    border:2px solid  ${(props) => props.$isdark ? '#f4f4f4' : '#3b82f6'};
    background-color:transparent;
    border-radius:5px;
    margin-right:40px;
    margin-left:50px;
    font-weight:bold;
    color:${(props) => props.$isdark ? '#f4f4f4' : '#3b82f6'};
    &:hover{
        border:2px solid  ${(props) => props.$isdark ? '#f4f4f4' : '#3b82f6'};
    }
`;

export const ConfirmButton = styled.button`
    background-color:#3b82f6;
    color:white;
    border-style:none;
    border:none;
    font-weight:bold;
    border-radius:5px;
    margin-right:40px;
    margin-left:50px;
    padding:10px;
    font-weight:bold;
    &:hover{
        border:none;
    }
`;

//HomeVideoCard
export const HomeVideoSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 10px;
  background-color:transparent;
  overflow: hidden;
  color: ${(props) => (props.$isdark ? 'white' : 'black')};
  cursor:pointer;

//   @media screen and (max-width: 992px) {
//     width: 45%;
//   }

  @media screen and (max-width: 768px) {
    width: 45%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const HomeVideosLoaderContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    height:calc(100vh - 80px);
    background-color:${(props) => props.$isdark ? '#606060' : '#f9f9f9'};
`;

export const VideosLoaderContainer = styled(HomeVideosLoaderContainer)`
    background-color:${(props) => props.$isdark ? 'black' : 'white'}
`;

export const HomeErrView = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-content:center;
    height:calc(100% - 270px);
    background-color:${(props) => props.$isdark ? '#606060' : '#f9f9f9'};
    color:${(props) => props.$isdark ? 'white' : 'black'};

    @media screen and (min-width: 321px){
      height:500px;
    }
`;

export const ErrorViewContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-content:center;
    height:calc(100vh - 80px);
    background-color:${(props) => props.$isdark ? 'black' : 'white'};
    color:${(props) => props.$isdark ? 'white' : 'black'};
`;

export const FailureImg = styled.img`
    width:200px;
    height:200px;
    align-self:center;
`;

export const FailureHeading = styled.h2`
    font-size:22px;
    font-weight:bold;
    margin:5px;
`;

export const FailureDescription = styled.p`
    font-size:16px;
`;

export const HomeVideoThumbnail = styled.img`
    width: 100%;
    height: 180px;
`;

export const VideoContentSection = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
`;

export const ChannelLogo = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

export const VideoTextSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const VideoTitle = styled.h4`
    font-size: 16px;
    font-weight: bold;
    margin: 0;
`;

export const ChannelName = styled.p`
    font-size: 14px;
    color:${(props) => props.$isdark ? '#f9f9f9' : '#64748b'};
    margin: 4px 0;
`;

export const VideoBasicDetails = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 12px;
    color:${(props) => props.$isdark ? '#f9f9f9' : '#64748b'} ;
    gap: 8px;
`;

//VideoDetailsSection

export const VideoDetailsComponent = styled.div`
    height:100%;
`;

export const VideoDetailsSection = styled.div`
    display:flex;
    flex-direction:row;
`;

export const VideoThumbnail = styled.img`
    min-width:300px;
    height:150px;
    object-fit:cover;
    
    @media screen and (min-width: 427px) and (max-width:860px){
      min-width:400px;
      max-width:400px;
      height:300px;
    }
    
    @media screen and (max-width: 320px) { 
      min-width:300px;
      height:150px;
      align-self:center;
    }
    
    @media screen and (min-width: 321px) and (max-width: 376px){
      min-width:350px;
      height:200px;
      align-self:center;
    }
    
    @media screen and (min-width: 377px) and (max-width: 426px) {
      width:400px;
      height:250px;
      align-self:center;
    }
`;

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction:column;
  padding-top:60px;
  padding-left:200px;
  background-color: transparent;
  width: 100%;
  // align-items:center;
  height:calc(100% - 80px);
  background-color: ${(props) => props.$isdark ? 'black' : 'white'};
  color: ${(props) => (props.$isdark ? 'white' : 'black')};

  @media screen and (max-width: 860px) {
    padding-left:5px;
  }
`;

export const VideoFrame = styled.iframe`
  width: 99%;
  height: 400px;
  margin: 20px 0;
  border: none;
  align-self:center;

  @media screen and (min-width:377px) and (max-width:426px){
    height: 300px;
    width:400px;
    align-self:center;
  }

  @media screen and (min-width:322px) and (max-width:376px){
    height:250px;
    width:350px;
    align-self:center;
  }

  @media screen and (max-width: 321px) {
    height: 200px;
    width:300px;
    align-self:center;
  }
`;

export const VideoDetailsTitle = styled.h3`
    font-size: 18px;
  margin: 5px 0;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    // text-align: center;
  }

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;

export const VideoInfo = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    margin-top: 10px;
    color: #7e858e;

    @media screen and (max-width:426px){
      flex-direction:column;
    }
`;

export const ActionButtons = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    gap: 10px;
    margin: 10px 0;
`;

export const HorizontalLine = styled.hr`
    border: none;
    border-top: 1px solid #cccccc;
    margin: 10px 0;
`;

export const ChannelInfoSection = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const VideoDetailsChannelLogo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-right: 20px;

    @media screen and (max-width: 768px) {
        width: 50px;
        height: 50px;
        margin-right: 10;
        margin-bottom: 10px;
    }
`;

export const ChannelDescription = styled.div`
    display: flex;
    flex-direction: column;
`;

export const VideoDetailsChannelName = styled.p`
    font-weight: bold;
    margin:0px;
`;

export const SubscribersText = styled.p`
    font-size: 14px;
    color: #7e858e;
    margin:0px;
`;

export const DescriptionText = styled.p`
    font-size: 15px;
    margin-top: 15px;
    line-height: 1.5;
`;

export const ActionButton = styled.button`
    background: none;
    border: none;
    color: ${(props) => (props.active ? '#2563eb' : '#64748b')};
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 15px;

    &:hover {
        opacity: 0.8;
        border:none;
    }
    &:focus {
        border:none;
    }
`
//TrendingVideos
export const TrendingVideosSection = styled.div`
    display:flex;
    flex-direction:row;

    @media screen and (max-width:860px){
      width:100%;
      flex-direction:column;
      padding-left:0px;
    }
`;

export const TrendingVideosContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => (props.$isdark ? 'black' : 'white')};
    color: ${(props) => (props.$isdark ? 'white' : 'black')};
    padding: 20px;
    gap:10px;
    overflow-y:auto;
    height:100%;

    @media screen and (max-width:860px) {
      padding:0px;
    }
`;

export const Heading = styled.h2`
    display:flex;
    flex-direction:row;
    // justify-content:space-around;
    width:calc(100%-20px);
    margin:0px;
    // padding:10px;
    background-color:${(props) => props.$isdark ? 'black' : 'white'};
    color:${(props) => props.$isdark ? 'white' : 'black'};

    @media screen and (max-width:860px) {
      width:100%;
    }
`;

export const TrendingHeaderIcon = styled(MdWhatshot)`
    color:red;
    font-size:40px;
    padding-left:20px;
    padding-top:10px;
    padding-right:10px;
`;
//SavedVideos

export const SavedVideosSection = styled.div`
    display:flex;
    flex-direction:row;
    height:100%;
`;

export const ScrollableContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  padding-left: 180px;
  padding-top: 80px;
  height: calc(100% - 80px);

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.$isdark ? 'black' : '#f1f1f1'};
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
    border: 2px solid #f1f1f1;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;

  @media screen and (max-width:860px){
    padding-left:0px;
  }
`;

export const SavedVideosComponent = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    background-color:${(props) => props.$isdark ? 'black' : 'white'};
    color:${(props) => props.$isdark ? 'white' : 'black'};
`;

export const SavedVideosContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    padding-left:20px;
    height:100%;
    overflow-y:auto;
    background-color:${(props) => props.$isdark ? 'black' : 'white'};
    color:${(props) => props.$isdark ? 'white' : 'black'};

    @media screen and (max-width: 768px) {
        padding: 5px;
    }

    @media screen and (max-width: 576px) {
        padding: 0px;
    }
`;

export const SavedVideosHeaderIcon = styled(RiMenuAddLine)`
    color:red;
    font-size:40px;
    padding-left:20px;
    padding-top:10px;
    padding-right:10px;
`;

export const NoSavedVideosSection = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:center;
    justify-self:center;
    margin:auto;
`;

export const NoSavedVideosHeading = styled.h1`
    margin:5px;

    @media screen and (min-width:377px) and (max-width:426px){
      font-size:24px;
    }

    @media screen and (min-width:327px) and (max-width:376px){
      font-size:22px;
    }

    @media screen and (max-width:326px){
      font-size:20px;
    }
`;

export const NoSavedVideos = styled.img`
    width:400px;
    height:300px;
    align-self:center;
    justify-self:center;

    @media screen and (min-width:377px) and (max-width:426px){
      width:300px;
      height:250px;
    }

    @media screen and (min-width:327px) and (max-width:376px){
      width:250px;
      height:200px;
    }

    @media screen and (max-width:326px) {
      width:200px;
      height:150px;
    }
`;

//SavedVideosCard

export const VideosCardSection = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    color: ${(props) => props.$isdark ? 'white' : 'black'};
    width: 100%;
    // cursor: pointer;
    // text-decoration: none;
    @media screen and (max-width:320px){
        flex-direction:column;
        width:100%;
        justify-content:center;
    }
    
    @media screen and (min-width:321px) and (max-width: 376px) {
      flex-direction:column;
      width:100%;
      justify-content:center;
    }
    
    @media screen and (min-width: 377px) and (max-width: 426px) {
      flex-direction:column;
      width:100%;
      justify-content:center;
    }
`;

export const VideosTitle = styled(VideoTitle)`
    font-size:22px;
`;

//GamingVideos

export const GamingVideosSection = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
`;

export const GamingVideosContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:70px;
    height:100%;
    overflow-y:auto;
    width:calc(100% - 50px);
    background-color:${(props) => props.$isdark ? 'black' : 'white'};
    color:${(props) => props.$isdark ? 'white' : 'black'};
    width:100%;

    @media screen and (max-width: 900px) {
      gap:5px;
      justify-content:space-between;
    }

    @media screen and (min-width: 326px) and (max-width: 767px) {
    justify-content: center;
    gap:10px;
    }

    @media screen and (max-width: 325px) {
    justify-content: center;
    gap:10px;
    }
`;

export const GamingHeaderIcon = styled(SiYoutubegaming)`
    color:red;
    font-size:40px;
    padding-left:20px;
    padding-top:10px;
    padding-right:10px;
`;

//GamingCard
export const GamingSection = styled.div`
    background-color:${(props) => props.$isdark ? 'black' : 'white'};
    color:${(props) => props.$isdark ? 'white' : 'black'} 
`;

export const GamingCardSection = styled.div`
    background-color: ${(props) => props.$isdark ? "#181818" : "#fff"};
    color: ${(props) => props.$isdark ? "#fff" : "#000"};
    border-radius: 5px;
    margin-bottom:30px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    cursor: pointer;

    @media screen and (min-width:376px) and (max-width:425px){
      width:320px;
      align-self:center;
    }

    @media screen and (min-width:322px) and (max-width: 376px) {
      width: 350px;
      align-self:center;
    }

    @media screen and (max-width: 321px) {
      width: 280px;
      align-self:center;
    }
`

export const GamingCardThumbnail = styled.img`
    width: 100%;
    border-radius: 10px 10px 0 0;

    @media screen (min-width:326px) and (max-width:376px) {
      width:320px;
    }
`

export const GamingCardTitle = styled.p`
    font-weight: bold;
    margin: 10px 0 5px;
`

export const GamingCardViews = styled.p`
    font-size: 14px;
    color: gray;
    margin:0px;
`

//NotFound
export const NotFoundSection = styled.div`
    display:flex;
    flex-direction:row;
    height:100%;
`;

export const NotFoundContainer = styled.div`
    display:flex;
    flex-direction:column;
    // margin-top:80px;
    padding-top:90px;
    gap:40px;
    padding-left:19%;
    // padding-top:10px;
    align-items:center;
    justify-content:center;
    width:100%;
    height:calc(100% - 90px);
    background-color:${(props) => props.$isdark ? 'black' : 'white'};
    color:${(props) => props.$isdark ? 'white' : 'black'};
`;

export const NotFoundImg = styled.img`
    width:400px;
    height:300px;
`;

export const Container = styled.div`
    height:100%;
`;

//HamburgerPopup
export const HamburgerPopupWrapper = styled.div`
    background-color: ${({ $isdark }) => ($isdark ? "#181818" : "#ffffff")};
    color: ${({ $isdark }) => ($isdark ? "#ffffff" : "#000000")};
    height: 100vh;
    width: 100vw;
    padding: 20px;
    display:flex;
    flex-direction:column;
    // align-items:center;
    // justify-content:center;
`;

export const HamburgerCloseButton = styled.button`
    background: none;
    border: none;
    color: inherit;
    font-size: 20px;
    text-align: center;
    width: 100%;
    cursor: pointer;
    justify-content:flex-start;
`;

export const HamburgerListItems = styled(ListItems)`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:auto;
    width:200px;
`;

export const HamburgerPopupItem = styled(ListItem)`
    display: flex;
    margin-top: 5px;
    padding: 11px 11px 11px 40px;
    width:200px;
`;

export const HamburgerMenuHomeIcon = styled(HomeIcon)`
    padding-right:10px;
`;

export const HamburgerMenuTrendingIcon = styled(TrendingIcon)`
    margin-left:20px;
    padding-right:5px;
`;