import SpeakBox from "../components/SpeakBox";

const HeaderContainer = ({ socket }) => {
    return (<>
        <SpeakBox socket={socket} />
        {/* <Menu /> */}
    </>);
}

export default HeaderContainer;