import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header, CardNews } from "~/components";
import Notification from "~/assets/icons/bell.svg";

import * as Styled from "./styles.js";

export default function News() {
  const [t] = useTranslation();

  return (
    <>
      <Header title={t("header.news")} rightIcon={Notification} />

      <Grid>
      {/*  <Row>
          <Cell desktopColumns={12} phoneColumns={4} tabletColumns={4}>
            <Styled.DivTitle>
              <Styled.PageTitle>Conteúdos relevantes</Styled.PageTitle>
              <hr />
            </Styled.DivTitle>
          </Cell>
        </Row> */}  

        <Row>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/Revelando_a_origem_e_transmissao_do_COVID-19">
            <CardNews
              title="Revelando a origem e transmissão do COVID-19"
              content={<p>O novo coronavírus infectou milhares de pessoas na China desde dezembro de 2019, aumentando uma preocupação global de saúde pública. Estudos recentes (Huang et al., Chan et al. e Zhou et al.) forneceram informações oportunas sobre sua origem e capacidade de se espalhar entre os seres humanos, informando a prevenção de infecções e práticas de controle.</p>}
              date={new Date(2020, 2, 24, 12)}
              tag={<div>#covid-19</div>}
            />
            </a>
          </Cell>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/medidas_basicas_de_protecao_contra_o_novo_coronavirus">
            <CardNews
              title="Medidas básicas de proteção contra o novo coronavírus"
              content={<p>Fique atento às últimas informações sobre o surto de COVID-19, disponíveis no site da OMS e através de sua autoridade nacional e local de saúde pública. A maioria das pessoas infectadas experimenta sintomas leves e se recupera, mas pode ser mais grave para outras pessoas. Cuide de sua saúde e proteja os outros fazendo o seguinte: </p>}
              date={new Date(2020, 2, 18, 12)}
              tag={<div>#covid-19</div>}
            />
            </a>
          </Cell>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/projeto_de_ventilador_recebe_sinal_verde_do_governo_do_Reino_Unido_para_avançar_a_proxima_etapa_dos_testes">
            <CardNews
              title="Projeto de ventilador recebe sinal verde do governo do Reino Unido para avançar à próxima etapa dos testes"
              content={<p>Uma equipe multidisciplinar de engenheiros e médicos da Universidade de Oxford e do King's College London, OxVent, foi selecionada pelo governo do Reino Unido para passar à próxima etapa de testes de segurança e usabilidade do protótipo de ventilador.</p>}
              date={new Date(2020, 2, 31, 12)}
              tag={<div>#vacina</div>}
            />
            </a>
          </Cell>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
          >
           <a href="/news/Universidade_de_Oxford_recruta_para_testes_de_vacina_criada_para_erradicar_o_COVID-19">
            <CardNews
              title="Universidade de Oxford recruta para testes de vacina criada para erradicar o COVID-19"
              content={<p>Pesquisadores da Universidade de Oxford que trabalham em um esforço sem precedentes no desenvolvimento de vacinas para impedir o COVID-19 começaram a rastrear voluntários saudáveis (entre 18 e 55 anos) hoje para o próximo teste de vacina ChAdOx1 nCoV-19 na região do Vale do Tamisa.</p>}
              date={new Date(2020, 2, 27, 12)}
              tag={<div>#vacina</div>}
            />
            </a>
          </Cell>
          <Cell
          desktopColumns={3}
          phoneColumns={4}
          tabletColumns={4}
          >
           <a href="/news/Diretor-Geral_da_OMS_apela_ao_G20_para_combater_unir_e_inflamar_o_COVID-19">
            <CardNews
              title="Diretor-Geral da OMS apela ao G20 para combater, unir e inflamar o COVID-19"
              content={<p>O Dr. Tedros Adhanom Ghebreyesus, Diretor-Geral da Organização Mundial da Saúde, reuniu com Chefes de Estado na extraordinária Cúpula de Líderes do G20 de hoje, focada no COVID-19. Durante o encontro, Tedros disse: “Vocês se uniram para enfrentar a crise de saúde que define o nosso tempo: estamos em guerra com um vírus que ameaça nos separar; se deixarmos”. Também elogiou a iniciativa do G20 de encontrar soluções conjuntas e trabalhar em conjunto: “Esta é uma crise global que requer uma resposta global”.</p>}
              date={new Date(2020, 2, 26, 12)}
              tag={<div>#união</div>}
            />
            </a>
          </Cell> 

          <Cell
          desktopColumns={3}
          phoneColumns={4}
          tabletColumns={4}
          >
           <a href="/news/Por_trás_do_relatório_que_pôs_os_EUA_e_o_Reino_Unido_em_ação_contra_o_vírus_COVID-19">
            <CardNews
              title="Por trás do relatório de vírus que pôs os EUA e o Reino Unido em ação"
              content={<p>Quando Boris Johnson estava em campanha para que a Grã-Bretanha deixasse a União Europeia em 2016 - um caminho que muitos especialistas alertaram que terminaria em desastre para o país - um de seus aliados próximos, Michael Gove, declarou que “as pessoas neste país tiveram número suficiente de especialistas."</p>}
              date={new Date(2020, 2, 17, 12)}
              tag={<div>#pesquisa</div>}
            />
            </a>
          </Cell>
        </Row>
      </Grid>
    </>
  );
}