import { Logo, Image, TextHeader, Content } from "./style";
import image from "../../images/tasks.svg";
import logo from "../../images/logo.png";
import { Grid, Text, Row } from "@nextui-org/react";
export default function Header() {
  return (
    <Content>
      <Row justify="center" align="center">
        <Grid.Container>
          <Grid xs justify="center">
            <TextHeader>
              <Text
                h1
                size={70}
                css={{
                  color: "#f3f3f3",
                }}
              >
                <Logo src={logo} />
                TaskToday
              </Text>
              <Text h1 size={25} weight="bold">
                Uma forma rápida de você gerenciar <br />
                suas tarefas do dia a dia
              </Text>
            </TextHeader>
          </Grid>
          <Grid xs={0} sm={5} md={5} lg={5} xl={5}>
            <Image src={image} />
          </Grid>
        </Grid.Container>
      </Row>
    </Content>
  );
}
