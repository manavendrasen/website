import React from 'react';
import {
  Divider, Heading, Text, Box,
} from '@chakra-ui/react';
import Section from '../../components/Home/Section';
import SectionHeader from '../../components/Home/Section/SectionHeader';
import SocietiesHeader from '../../components/Societies/SocietiesHeader';
import SectionContent from '../../components/Home/Section/SectionContent';
import SocietiesContent from '../../components/Societies/SocietiesContent';
import TitleHeader from '../../components/Layout/TitleHeader';
import FadeInUp from '../../components/FadeInUp';

import ResponsiveContainer from '../../components/Layout/ResponsiveContainer';

const Societies = () => {
  const sectionData = [
    {
      alignment: 'left',
      heading: 'IEEE CS',
      headingColor: '#f89a0f',
      subHeading: 'Iusto laudantium dolorum consequuntur quae',
      subHeadingColor: 'darkblue',
      titleQues: 'IEEE Computer Society',
      alignText: 'right',
      alignImg: 'left',
      dividerBg: '#FF8427',
      instaUrl: '#',
      linkedInUrl: '#',
      twitterUrl: '#',
      imgSrc: '/svg/ieee_cs_logo.svg',
      imgMarginBottom: '3em',
      imgWidth: '100%',
    },
    {
      alignment: 'right',
      heading: 'IEEE WIE',
      headingColor: '#6c258c',
      subHeading: 'Quae blanditiis ipsum aut vero atque doloribus',
      subHeadingColor: '#F04273',
      titleQues: 'IEEE Women In Engineering',
      alignText: 'left',
      alignImg: 'right',
      dividerBg: '#D11149',
      instaUrl: '#',
      linkedInUrl: '#',
      twitterUrl: '#',
      imgSrc: '/svg/ieee_wie_logo.svg',
      imgMarginTop: '3em',
      imgMarginRight: ['3em', '4em', '8em', '15em', '8em'],
    },
  ];
  return (
    <main>
      <TitleHeader>
        <FadeInUp>
          <Heading
            size="lg"
            textAlign="center"
            color="white"
            backgroundColor="brand.700"
            padding="8px"
            rounded="lg"
          >
            SOCIETIES
          </Heading>
          <Text
            fontSize="md"
            color="gray.200"
            textAlign="center"
            backgroundColor="brand.700"
            padding="8px"
            rounded="lg"
          >
            Take advantage of specialized opportunities.
          </Text>
        </FadeInUp>
      </TitleHeader>
      <Box marginBottom="3rem">
        {sectionData.map((item) => (
          <Box paddingTop="32px" paddingBottom="32px" key={item.heading}>
            <ResponsiveContainer>
              <FadeInUp>
                {/* <SectionHeader> */}
                {/* <SocietiesHeader
                heading={item.heading}
                headingColor={item.headingColor}
                subHeading={item.subHeading}
                subHeadingColor={item.subHeadingColor}
              /> */}
                {/* </SectionHeader> */}
                {/* <Divider backgroundColor={item.dividerBg} height="0.7" /> */}
                <SectionContent>
                  <SocietiesContent
                    alignment={item.alignment}
                    altText={item.heading}
                    titleQues={item.titleQues}
                    alignText={item.alignText}
                    alignImg={item.alignImg}
                    instaUrl={item.instaUrl}
                    twitterUrl={item.twitterUrl}
                    linkedInUrl={item.linkedInUrl}
                    imgSrc={item.imgSrc}
                    imgMarginTop={item.imgMarginTop}
                    imgMarginBottom={item.imgMarginBottom}
                    imgMarginRight={item.imgMarginRight}
                    imgWidth={item.imgWidth}
                  />
                </SectionContent>
                {/* <Divider backgroundColor={item.dividerBg} height="0.7" /> */}
              </FadeInUp>
            </ResponsiveContainer>
          </Box>
        ))}
      </Box>
    </main>
  );
};

export default Societies;
