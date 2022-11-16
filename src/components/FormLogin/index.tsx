import { ContentInput } from "./style";
import { Container, Grid, Text, Row, Input, Button } from "@nextui-org/react";
export default function FormLogin() {
  return (
    <Container>
      <Row justify="center" align="center">
        <Grid.Container gap={2}>
          <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
            <Grid.Container gap={2}>
              <Grid xs={12} justify="center">
                <Text h1 size={25} weight="bold">
                  Se você já tem usuário, acesse aqui.
                </Text>
              </Grid>
              <Grid xs={12} justify="center">
                <ContentInput>
                  <Text size={20} weight="bold">
                    Usuário
                  </Text>
                  <Input placeholder="Usuário" />
                </ContentInput>
              </Grid>
              <Grid xs={12} justify="center">
                <ContentInput>
                  <Text size={20} weight="bold">
                    Senha
                  </Text>
                  <Input type="password" placeholder="Senha" />
                </ContentInput>
              </Grid>
              <Grid xs={12} justify="center">
                <Button shadow color="success">
                  Acessar
                </Button>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
            <Grid.Container gap={2}>
              <Grid xs={12} justify="center">
                <Text h1 size={25} weight="bold">
                  Se você ainda não tem usuário, cadastre-se aqui.
                </Text>
              </Grid>
              <Grid xs={12} justify="center">
                <ContentInput>
                  <Text size={20} weight="bold">
                    Usuário
                  </Text>
                  <Input placeholder="Usuário" />
                </ContentInput>
              </Grid>
              <Grid xs={12} justify="center">
                <ContentInput>
                  <Text size={20} weight="bold">
                    Senha
                  </Text>
                  <Input type="password" placeholder="Senha" />
                </ContentInput>
              </Grid>
              <Grid xs={12} justify="center">
                <Button shadow color="primary">
                  Cadastrar
                </Button>
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Row>
    </Container>
  );
}
