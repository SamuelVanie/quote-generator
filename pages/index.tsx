import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";


// Components
import {
  GradientBackgroundCon,
  BackgroundImage1,
  BackgroundImage2,
  FooterCon,
  FooterLink,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorTitle,
  QuoteGeneratorSubTitle,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

// Assets
import Clouds1 from "../assets/cloud-sunny.png";
import Clouds2 from "../assets/cumulonimbus.png";
import React, { useState } from "react";

export default function Home() {

  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  
  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="Generate quotes from AWS site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background */}
      <GradientBackgroundCon>

        {/* Generator Modal Pop-up */}
        {/*<QuoteGeneratorModal/>*/}

        {/* Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>Daily Inspiration Generator</QuoteGeneratorTitle>
            <QuoteGeneratorSubTitle>
    Looking for some splash of inspiration? Generate your daily random quote card provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes.io</FooterLink>
            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null}>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>
        
        <BackgroundImage1 src={Clouds1} height="300" alt="cloudybackground" />
        <BackgroundImage2 src={Clouds2} height="300" alt="cloudybackground" />
      </GradientBackgroundCon>

      <FooterCon>
      <>
        Quotes Generated: {numberOfQuotes}
        <br/>
        Developed with ❤️ by <FooterLink href="https://portfolio-next-js-samuelvanie.vercel.app/" target="_blank" rel="noopener noreferrer">Samuel Michael Vanié</FooterLink>
      </>
      </FooterCon>
      </>
  );
}
