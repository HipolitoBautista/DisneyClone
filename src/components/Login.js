
import styled from "styled-components";

//Login component which will be returned with styling in app.js
const Login = (props) => {
    
    return (
    <Container>
        <Content>
            {/* our disney background image with multiple movie titles) */}
            <BgImage>
            </BgImage>
            {/* Our call to action section) */}
            <CTA>
                {/* First call to action logo (disney, espn,hulu) */}
                <CTALogoOne src = '/images/cta-logo-one.svg' alt = "Logos for Disney Espn and Hulu"/>
                {/* our signup button */}
                <SignUp>GET ALL THERE</SignUp>
                {/* our Description of dinsey+ bundle) */}
                <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. as of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</Description>
                {/* our second call to action logo (disney, starwards,marvel etc) */}
                <CTALogoTwo src = '/images/cta-logo-two.png' alt = "Brands that come with disney+ logo"/>
            </CTA>
        </Content>
    </Container>
    );
};

//styling for our container
const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

//styling for our content
const Content = styled.div`
margin-bottom: 10vh;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;

`;

//styling for our background image
const BgImage = styled.div`

background-image: url("/images/login-background.jpg");
height:100%;
background-position: top;
background-repeat: no-repeat;
background-size: cover;
z-index: -1;
position: absolute;
top:0;
right: 0;
left:0;
`

//styling for our call to action section
const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display:flex;
flex-direction: column;
justify-content:center;
margin-top: 0;
align-items: center;
text-align: center;
margin-right: auto;
margin-left:auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width: 100%;


`
//styling for our first call to action logo
const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
display: block;
width: 100%;
min-height: 1px;
`

//styling for our SignUp Button
const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size:18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: #0483ee;
}
`;

//styling for our Description
const Description = styled.p`

color: hsla(0,0%,95%.3,1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5em;
letter-spacing: 1.5px;
`

//Styling for our second call to action logo
const CTALogoTwo = styled.img`
margin-bottom: 20px;
max-width: 600px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`


//exorting the Login component with styling to the app.js
export default Login;