# RJP Eng Hub V1.0

Hub pessoal para agregar apenas as aplicações do projeto de Engenharia RJP. Não inclui Navigator, Vedações, Manutenção ou aplicações ferroviárias.

## Aplicações iniciais
- SmartStruct RJP — engenharia/cálculo.
- RJP 3D Studio — BIM/3D, MQT, orçamento, planeamento e autos.

## Projeto como unidade central
Cada projeto tem uma ficha comum e um manifesto `RJP-ENG-PROJECT/1.0` exportável/importável. O manifesto regista a estrutura de pastas, ficheiros e qual é o IFC atual.

## Google Drive
Preparado para a pasta raiz `RJP_ENG`, com subpastas por projeto. A integração live com Drive fica para ativar quando a pasta for criada/configurada; esta versão não finge ter sincronização remota sem credenciais.

## IFC
O fluxo técnico definido é `SmartStruct ⇄ IFC ⇄ RJP 3D Studio`. O Hub gere a versão/referência do IFC, mas não calcula nem modela.

## GitHub Pages
Workflow único: Build WebApp -> Deploy WebApp + Build Android APK. Em Settings > Pages, usar Source: GitHub Actions.
