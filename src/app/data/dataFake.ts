export const dataFake = [
  {
    id: '1',
    title: 'NOVO HOMEM DE FERRO EM 3D',
    description: 'Marvel anuncia um novo filme do Homem de Ferro, confira os detalhes e o que muda no universo.',
    photoCover: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F51FA9F6CBD9F0C9B1394B1CC0A6A842D07091318674E234CD33CBF7C28CDC3/scale?width=1200&aspectRatio=1.78&format=jpeg',
    content:
      'A Marvel trouxe rumores fortes sobre uma nova abordagem para o Homem de Ferro.\n\nNesta matéria, a ideia é avaliar o que um "Homem de Ferro em 3D" pode significar para efeitos, roteiro e continuidade.\n\nPontos que devem ganhar espaço:\n- Visual com mais detalhes mecânicos em cena\n- Integração com novas equipes\n- Arcos mais tecnológicos e menos místicos\n\nFica a pergunta: você prefere um retorno nostálgico ou algo totalmente novo?',
    categoria: 'Cinema',
    tags: ['marvel', 'homem de ferro', 'filmes'],
    autor: 'Equipe Blog',
    dataPublicacao: '2025-12-10'
  },
  {
    id: '2',
    title: 'Nova série anunciada no Disney+',
    description: 'Uma nova série foi confirmada e já tem janela de estreia. Veja o que esperar.',
    photoCover: 'https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg',
    content:
      'O Disney+ confirmou uma nova produção para o próximo ciclo de lançamentos.\n\nO foco está em personagens que ainda não tiveram tanto tempo de tela, com um roteiro mais investigativo e menos explosivo.\n\nO que vale acompanhar:\n- Teasers oficiais\n- Elenco e direção\n- Conexões com filmes recentes\n\nSe você curte séries com mistério, essa pode ser uma boa aposta.',
    categoria: 'Séries',
    tags: ['disney+', 'série', 'estreia'],
    autor: 'Equipe Blog',
    dataPublicacao: '2025-12-08'
  },
  {
    id: '3',
    title: 'Guia rápido: JDBC com PreparedStatement sem dor',
    description: 'Quando usar PreparedStatement e como evitar SQL Injection sem virar refém de concatenação.',
    photoCover: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=60',
    content:
      'Se o usuário influencia qualquer parte da query (filtros, ordenação, texto de pesquisa), prefira PreparedStatement.\n\nBoas práticas:\n1) Use parâmetros ( ? ) para valores\n2) Nunca concatene entrada do usuário na query\n3) Valide listas fechadas (ex.: ORDER BY em colunas permitidas)\n\nExemplo mental: você monta a query com estrutura fixa e apenas injeta valores com setString, setLong, etc.\n\nResultado: mais segurança, mais legibilidade e, em vários cenários, até ganho de desempenho por reuso de plano.',
    categoria: 'Back-end',
    tags: ['java', 'jdbc', 'segurança'],
    autor: 'Igor',
    dataPublicacao: '2025-12-06'
  },
  {
    id: '4',
    title: 'Hibernate e JPA: o que realmente muda no seu dia a dia',
    description: 'JPA é especificação. Hibernate é uma implementação (e ainda traz extras). Veja onde cada um entra.',
    photoCover: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=60',
    content:
      'Quando você usa JPA, você programa contra uma API padrão: EntityManager, annotations e conceitos como contexto de persistência.\n\nO Hibernate entra como uma implementação famosa dessa especificação. E ele também oferece recursos extras (como cache, tipos customizados e ferramentas próprias).\n\nNo mundo real, o principal ganho é reduzir a cola manual entre objetos e tabelas.\n\nDica prática: mantenha o código mais próximo de JPA onde possível, e use extras do Hibernate só quando fizer sentido.',
    categoria: 'Back-end',
    tags: ['java', 'jpa', 'hibernate', 'orm'],
    autor: 'Equipe Blog',
    dataPublicacao: '2025-12-02'
  },
  {
    id: '5',
    title: 'MySQL: View, Procedure e quando usar cada uma',
    description: 'Entenda de forma simples para que serve View e Procedure e como isso ajuda a organizar regras.',
    photoCover: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=60',
    content:
      'View: é uma consulta salva que você acessa como se fosse uma tabela. Ajuda a padronizar relatórios e esconder complexidade.\n\nProcedure: é um conjunto de comandos SQL que você executa com parâmetros. Ajuda a automatizar passos repetitivos, encapsular lógica e padronizar operações.\n\nRegra rápida:\n- View para leitura e composição de consulta\n- Procedure para operações que envolvem passos, validações e escrita\n\nDica: evite colocar regra de negócio pesada no banco se a aplicação precisa evoluir rápido, mas use com bom senso para organizar.',
    categoria: 'Banco de Dados',
    tags: ['mysql', 'view', 'procedure'],
    autor: 'Equipe Blog',
    dataPublicacao: '2025-11-28'
  },
  {
    id: '6',
    title: 'Performance: por que batch melhora seu insert/update',
    description: 'addBatch junta comandos e executeBatch dispara tudo de uma vez. Veja o que muda na prática.',
    photoCover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=60',
    content:
      'Operação em lote reduz idas e voltas entre aplicação e banco.\n\nNo JDBC:\n- addBatch adiciona a operação na fila\n- executeBatch executa o lote e retorna um array de resultados\n\nQuando vale mais:\n- grande volume de inserts/updates\n- transações controladas com autoCommit(false)\n\nEm geral, você ganha desempenho porque diminui o custo de rede e o overhead do banco para cada comando individual.',
    categoria: 'Banco de Dados',
    tags: ['jdbc', 'batch', 'performance'],
    autor: 'Igor',
    dataPublicacao: '2025-11-20'
  }
]
