import { Box, Heading, Main, Paragraph, Button } from "grommet";
import React, { FC } from "react";
import { ReactComponent as Rocket } from "../images/rocket.svg";

export const Landing: FC = () => {
  return (
    <Main background="#252730" pad="xlarge">
      <Box direction="row">
        <Box align="start" margin="small">
          <Heading>Дом студенческого киберспорта</Heading>
          <Paragraph size="small">
            Создаем возможности всем студентам соревноваться, расти
            профессионально и находить новых верных друзей.
          </Paragraph>
          <Button primary href="/blog" label="Подробнее" />
        </Box>
        <Rocket />
      </Box>
      {/* <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
        <Box flex align='center' justify='center'>
          Content
        </Box>
      </Box> */}
    </Main>
  );
};
