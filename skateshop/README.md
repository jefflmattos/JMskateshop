# skateshop


Dependências instaladas:
Axios: To fetch data
Json-Server: Simulador de backend. To run backend = @data: npx json-server --watch db.json
Vue-Router: Navegação


Não foi utilizado Bootsrap no projeto pois eu preferi exercitar mais meus conhecimentos em CSS puro, porém por motivos de saúde, não tive muito tempo para me dedicar ao máximo no design do site, portanto, saiu essa coisinha aí :D

O projeto conta com 5 componentes e 2 views. Aqui estão alguns resumos e explicações dos módulos

**Componentes:**
- HeaderApp é o cabeçalho do site. !!!!Não apresenta problemas
- BannerHead é um banner com imagem. !!!!Não apresenta problemas 
- FilterProduct é somente o input de texto. !!!!Não há problemas **no componente**
- ProductCard é o card único de cada produto que seja inserido no backend. !!!!Não apresenta problemas
- FooterApp é o rodapé. Há problemas em fixar na parte inferior da view **ProductAbout**

**Views:**
- App = página de renderização, somente importa os componentes HeaderApp e FooterApp, e entre eles insere a router-view. !!!!Não apresenta problemas

-<mark>HomeView</mark> = Página principal do projeto, que importa o BannerHead, cada um dos ProductCards e o FilterProduct.
Funções:
A home conta com a função **filterProducts()**, que busca as palavras-chave inseridas no componente **FilterProduct**, converte para minúsculo e filtra os produtos de acordo com o nome. !!Infelizmente, não consegui descobrir o porque da função não estar filtrando pelo nome e o filtro não está respondendo da maneira correta.

Há também a função **loadProductData()**, que, de maneira assíncrona, faz uma requisição ao banco de dados (emulado pelo **Json-Server**) e recebe os dados para serem passados ao componente-filho **ProductCard**. !!!!Não apresenta problemas

Estilo:
Há uma <section class='grid'> para disponibilizar somente três **ProductCards** por linha 

- ProductAbout = Página de detalhes de cada produto
Funções:
Em **created()** eu crio uma <mark>nova</mark> requisição, dessa vez usando **Axios** para obter os itens do backend.
**img_src()** somente para dinamizar o caminho para a imagem de cada produto.

Na página de detalhes, !!há problemas com o posicionamento do Footer. Não consegui resolver este problema mesmo trazendo o componente do Footer para dentro da view. Ainda sim, ele fica posicionado logo abaixo da renderização dos detalhes do produto e não ao rodapé da página.




