import Image from "next/image";

import YouTubeIcon from "../public/assets/icons/youtube.svg";
import InstagramIcon from "../public/assets/icons/instagram.svg";
import TwitterIcon from "../public/assets/icons/twitter.svg";

import { AiTwotoneFolderAdd } from "react-icons/ai";
import { IoSchool } from "react-icons/io5";

export const whyBYUIdaho = [
  {
    id: 1,
    title: "圧倒的コスパ",
    description: `
      BYU-Idahoは学費がとても安いことで有名です。
      アメリカの私立4年制大学の授業料平均が$39,723のところ、
      BYU-Idahoは最大でも$13,608。
      さらに、BYU-Idaho Grantと呼ばれる奨学金を受けることで、
      一年間の授業料が最大で約90万円も安くなります。
      `,
    reference: [
      {
        title: "Average College Tuition in 2022-2023",
        link: "https://www.usnews.com/education/best-colleges/paying-for-college/articles/paying-for-college-infographic",
      },
      {
        title: "BYU-Idaho Tuition and Costs",
        link: "https://www.byui.edu/financial-aid/tuition-costs",
      },
    ],
  },
  {
    id: 2,
    title: "独自の学期制度",
    description: `
      BYU-Idaho独自の学期制度である”Three Track System”は、
      学生それぞれが自分のペースで学ぶことができるようになっています。
      Off-trackの学生には、多くの選択肢があります。
      バイトに励む生徒、帰国する生徒、On-track同様に多くの授業を受ける生徒、
      趣味に没頭する生徒など、さまざまです。
    `,
    reference: [
      {
        title: "Three Track System",
        link: "https://www.byui.edu/admissions/three-track-system",
      },
    ],
  },
  {
    id: 3,
    title: "3年で卒業",
    description: `
      一般的なアメリカの大学が採用している2学期制ではなく、
      BYU-Idahoは1年3学期制。
      このおかげで、3年かからず卒業する生徒も。
      最短3年弱で卒業することができるので、日本の大学に行くよりも
      早く社会に出て経験を積むことができます。
      `,
  },
  {
    id: 4,
    title: "柔軟な入学時期",
    description: `
      一般的なアメリカの大学は9月始まりなので、入学が遅れます。
      しかし、BYU-Idahoでは大きく、秋、冬、春の3つの学期があり、
      いつでも入学可能。
      高校を卒業し、すぐに4月中旬開始の春学期に入学する留学生も。
      `,
    reference: [
      {
        title: "International Application Deadlines",
        link: "https://www.byui.edu/admissions/application-deadlines",
      },
    ],
  },
  {
    id: 5,
    title: "安心安全",
    description: `
      アイダホ州は2023 Best States Rankings #3にランクイン。
      そして、犯罪率は全米で4番目に少ない州で、
      日本人留学生が安心した生活を送るのに適した州だと言えます。
      また、BYU-Idahoの位置する町"Rexburg"は
      アイダホ州の中でも犯罪率が非常に低いことで有名。
      `,
    reference: [
      {
        title: "Best States Rankings #3",
        link: "https://www.usnews.com/news/best-states/rankings",
      },
      {
        title: "Public Safety #5",
        link: "https://www.usnews.com/news/best-states/rankings/crime-and-corrections/public-safety",
      },
    ],
  },
  {
    id: 6,
    title: "整った学習環境",
    description: `
      授業料が安いことで有名なBYU-Idahoですが、
      教育環境はとても整っています。
      90個以上の専攻があり、
      その中には日本の大学にはない専攻も。例えば、ダンスや園芸など。
      あなたにとって最適な専攻を見つけてください。
      そして、Societyと呼ばれる同じ専攻の学生たちとのグループ活動に任意で参加できます。
      イベントを開催したり大会に出場したりする生徒も。
      `,
    reference: [
      {
        title: "About BYU-Idaho",
        link: "https://www.byui.edu/about/",
      },
      {
        title: "List of Majors",
        link: "https://www.byui.edu/catalog#/programs",
      },
    ],
  },
  // {
  //   id: 7,
  //   title: "みんな優しい",
  //   description: `
  //     宗教大学であるBYU-Idahoは、
  //     とても優しい人たちが集まる大学です。

  //     `,
  //   reference: [
  //     {
  //       title: "About BYU-Idaho",
  //       link: "https://www.byui.edu/about/",
  //     },
  //     {
  //       title: "List of Majors",
  //       link: "https://www.byui.edu/catalog#/programs",
  //     },
  //   ],
  // },
];

export const supportPlans = {
  beforeAdmission: {
    price: 39800,
    title: "合格前",
    subtitle: "まずはここから！夢にみたアメリカ留学を確実に実現！",
    payBack: {
      title: "注意点・返金制度",
      description: `
        39800円は税抜き価格です。\n
        英語の成績が足りない場合は、サポートの返金はいたしかねます。
        理由は当サービスの問題ではなく、本人の努力不足によるものです。
        また、TOEFLの点数保証はございません。
        アメリカ大学歴4年の知識・経験の共有をするだけで、
        英語試験受験塾ではございません。
        英語の成績以外の要素で不合格になってしまった場合のみ、返金いたします。
        `,
    },
    contents: [
      {
        id: 1,
        title: "入学願書提出",
        description: `
          BYU-Idahoの公式ウェブサイトから
          入学願書や手続きに関連する情報を共有し、
          一緒に進めるサポートを提供しています。
          また、もし未取得の場合は、
          パスポートやビザなどの必要書類の取得についてもサポートいたします。
        `,
      },
      {
        id: 2,
        title: "教会者面談",
        description: `
          教会者面談は、留学希望者が教会員の方と対面し、
          その人物がBYU-Idahoに適した人物であるかを判断する重要なプロセスです。
          お客様のためにスケジュール調整や面談の手配をお手伝いします。
          
          教会者面談では、お客様の個性や価値観、
          宗教的な信念などが評価されます。
          私たちが手配することで、
          面談の日時や場所を調整し、
          円滑に実施することができます。
      `,
        note: [`面談は教会員の方との2人のみで、私は同席不可`],
      },
      {
        id: 3,
        title: "エッセイの提出",
        description: `
          アメリカの大学では、英語の成績や入学願書に加えて、
          ほとんどの場合でエッセイの提出が必要となります。
          お客様の合格を引き寄せるため、
          回数無制限でエッセイの添削を行い、
          エッセイ作成のサポートを提供しています。
          ただし、最近のBYUアイダホでは、
          エッセイの提出が必要ない場合が多くなっています。
          これにより、お客様の留学手続きがスムーズに進むことができます。
      `,
        note: [`エッセイの提出が必要ない場合、7,000円の返金`],
      },
      {
        id: 4,
        title: "英語試験質問回答",
        description: `
          アメリカの大学で4年目の経験を持つ私が、
          合否に非常に重要な役割を果たす
          英語試験に関する質問を受け付けています。
          私自身、TOEFLの試験を2021年に受け、
          82点 (リーディング25点、リスニング19点、スピーキング17点、ライティング21点)を取得しました。
          もしTOEFLの点数を上げるための勉強法や
          ヒントなどについて質問がある場合には、喜んで共有します。
      `,
        note: [
          `点数保証ではございません`,
          `当サービスは受験対策塾ではございません。あくまで英語試験に関する質問に回答するものです`,
        ],
      },
      {
        id: 5,
        title: "月1オンライン進捗報告",
        description: `
          確実に合格を手にするために、オンラインでの進捗報告を月に1回1時間ほど行います。
          この進捗報告では、英語の勉強の進み具合やエッセイの添削、
          入学手続きの過程などを詳しく確認します。
          さらに、進捗報告の際には、お客様の質問にも丁寧に回答します。
      `,
      },
    ],
  },
  afterAdmission: {
    price: 49800,
    title: "合格後",
    subtitle: "合格おめでとう！留学前の不安を安心に変える！",
    payBack: {
      title: "注意点・返金制度",
      description: `
        49800円は税抜き価格です。\n
        現時点では、返金保証は設けておりません。
        `,
    },
    contents: [
      {
        id: 1,
        title: "アパート契約",
        description: `
          アパートの選定から契約書の翻訳、
          実際の契約まで、幅広いサポートを提供しています。
          まず、お客様とのヒアリングを通じて、ご要望やニーズを詳しくお伺いします。
          次に、私自身が実際にBYU-Idahoに2年間住んでいた経験や知識を活かし、
          あなたにとって最適なアパートをご提案し、契約代行をいたします。
      `,
      },
      {
        id: 2,
        title: "航空券手配",
        description: `
        お客様の要望を元に、航空券を探し手配します。
        最安なプラン、最短なプラン、直行便など、様々な航空券をご提案します。
        過去にはサポートを受けることで、東京・大学間で約5万円もの節約をされた方もいらっしゃいます。
        もし大学まで来れるか一人で来れるか不安な方には、別途、到着空港での合流も可能です。
        ぜひご検討ください。
      `,
      },
      {
        id: 3,
        title: "到着空港での合流",
        description: `
          初めての土地で1人で大学に到着することに不安を感じるかもしれません。
          特にRexburgへの交通は便が悪く、
          道に迷う可能性もあります。
          そういった方のために、
          IF/SLC空港での合流サービスを提供しており、
          確実に大学に到着できるようにサポートします。
          お客様の到着時間に合わせて、私自身が空港に向かい、
          一緒にアパートまで移動します。
        `,
        note: [
          "私が空港に出向くための費用は別途、お支払いいただきます。",
          "私が車で往復するのではなく、バス/ライドシェアを利用",
          "別のご利用者様との兼ね合いで、合流できかねる場合がございます。5,000円の返金保証",
        ],
        // optionPrice: 6980,
      },
      {
        id: 4,
        title: "履修登録",
        description: `
        BYUアイダホ歴2年の経験・知識をフル活用し、
        留学生活の肝となる授業の履修を共に行います。
        初めての履修登録は不安が多いもの。
        BYUアイダホには、演劇、ダンス、園芸、軍隊式トレーニングなど、
        日本の大学にはない面白い授業がたくさん。
        あなたの専攻・単位数・要望に合わせて、おすすめの授業をご提案します。
        他にも、将来楽になる賢い授業の取り方・大学ツールの "Grad Planner" の使い方なども伝授します。
      `,
      },
    ],
  },
  afterArrival: {
    price: 54800,
    title: "到着後",
    subtitle: "いよいよスタート！不安な留学生活の始まりを安心に変える",
    payBack: {
      title: "注意点・返金制度",
      description: `
        59800円は税抜き価格です。\n
        全てに個別の金額を設けています。そのため、必要なサポートのみを選択していただくことが可能です。例えば献血をされない方は、献血のサポートを選択しないことで、その分の金額を節約することができます。
        全て税抜き価格です。どれも有益なサポートですので、ぜひパッケージ価格の59800円での購入もご検討ください。
        `,
    },
    contents: [
      {
        id: 1,
        title: "奨学金申し込み",
        description: `
          BYUアイダホでは、GPAが3.75以上の生徒は応募すれば奨学金が支給されます。
          BYUアイダホの奨学金であるBYU-Idaho Grantの申し込みについて、
          共に手続きを進めます。
          GPAが3.95以上の場合、毎学期最大で授業料が$2,268安くなります。
          申し込み手続きから合格後のThanks Letterの添削・提出まで、
          奨学金関連のあらゆる作業を手助けいたします。
      `,
        note: ["GPAが3.75未満だと、奨学金を受けることができません。"],
        optionPrice: 9980,
      },
      {
        id: 2,
        title: "大学保険から切替",
        description: `
          大学保険には毎学期$500以上の費用がかかります。
          私のおすすめは、私自身も利用している無料の保険に切り替えることです。
          この保険に関する質問やメールの代行、
          さらに私が実際に利用した代理店への同行まで、
          あなたを全面的にサポートいたします。
        `,
        note: [
          // "慣れたら代理店で聞くことをおすすめします。",
        ],
        optionPrice: 9980,
      },
      {
        id: 3,
        title: "学期初日サポート",
        description: `
          BYUアイダホの学期初日に、
          キャンパスで直接サポートを行います。
          一緒にキャンパスに向かい、どの建物でどの授業が行われるか
          迷わないようにサポートいたします。
          また、お昼時には大学カフェ "Crossroads" で
          共にサポートを利用している日本人学生とのオリエンテーションも行う予定です。`,
        note: [
          "私や他の生徒の授業との兼ね合いで、サポートできかねる場合がございます。",
        ],
        optionPrice: 14980,
      },
      {
        id: 4,
        title: "食料品の事前調達",
        description: `
          到着後の初期段階では、多くのことがあり、
          食料品の買い出しは後回しになりがちです。
          それを解決するために、到着後数日分の食料品の買い出しをあらかじめ行います。
          あなたの必要な食料品についてヒアリングし、代わりに買い出しを行っておきます。
          到着後すぐに食料品を手に入れることで時間を有効に使い、
          安心して新生活を始めることができます。
      `,
        note: ["買い出し金額は別途、お支払いいただきます。"],
        optionPrice: 6980,
      },
      {
        id: 5,
        title: "生活用品の事前調達",
        description: `
          食料品の事前調達と同様に、生活用品の調達も行います。
          購入品の具体例は、調理器具や寝具セット、シャンプー、タオルなど、
          生活に必要なさまざまなアイテムを準備します。
          丁寧にヒアリングすることで必要な生活用品のリストを作成します。
          このサポートによって、時間のかかる住居チェックインや引っ越し作業に費やす時間を節約できます。
          あなたが到着したときには、必要な生活用品が整然と揃っており、
          アメリカでの新生活をスムーズに始めることができます。
      `,
        note: ["買い出し金額は別途、お支払いいただきます。"],
        optionPrice: 6980,
      },
      {
        id: 6,
        title: "献血",
        description: `
          アメリカでは献血を通じてお金を稼ぐことができ、
          毎週最大で$100の報酬を受け取ることができます。
          この方法は、バイトをするよりも効率的にお金を稼ぐことができるため、おすすめです。
          ただし、献血の手続きは少し面倒かもしれません。
          手続きや予約の手配など、献血に関するさまざまな手続きをサポートするために、
          私が一緒に行き、お手伝いをします。
      `,
        note: [
          "紹介者として、私の名前を伝えていただきます。",
          "献血自体は私が同行することはできないです。",
        ],
        optionPrice: 6980,
      },
      {
        id: 7,
        title: "海外SIM契約",
        description: `
          アメリカでの生活には、スマホが必要不可欠です。
          しかし、日本のSIMをそのまま使うことはできず、
          アメリカでのSIM契約が必須です。
          おすすめなのが、キャンパスにある "University Store" での契約です。
          有名なT-mobileと提携しており、ギガ数無制限が毎月格安の$20。
          この契約時に、私が同行し、通訳や代理人としてサポートいたします。
          ご利用のスマホは、日本のスマホをそのまま使うことができますが、
          SIMフリーである必要があります。
      `,
        note: [],
        optionPrice: 4980,
      },
      {
        id: 8,
        title: "質問回答、雑務手助け",
        description: `
          留学生活に関する質問にはいつでも回答します。
          アパートの乗り換え、引っ越し作業、Tax Return（確定申告）、
          奨学金の締め切りなど、留学生活で起こるさまざまな疑問や問題に対して、サポートいたします。
          留学生活で生じるさまざまな疑問や問題に対して、迅速かつ正確な回答をお届けします。
          お気軽に質問していただき、留学生活をスムーズに過ごすためのサポートを提供します。
        `,
        optionPrice: 4980,
      },
    ],
  },
};

export const threePoints = [
  {
    id: 1,
    tMsg: "授業料",
    mainMsg: [0, "円"],
    bMsg: "の生徒多数",
  },
  {
    id: 2,
    tMsg: "卒業まで",
    mainMsg: [3, "年"],
    bMsg: "が可能",
  },
  {
    id: 3,
    tMsg: "最終成績",
    mainMsg: [4.0, "点"],
    bMsg: "を保ちやすい",
  },
];

// パスポートやビザ取得など入学手続き、教会者面談サポート、(エッセイの提出)、アパート契約、航空券手配、授業登録
// 奨学金申し込み、大学保険から切替、学期初日サポート（クラスやお昼ごはん込み）、到着後数日の食料品、
// 調理器具や寝具セット購入、住居チェックイン、引っ越し、献血、到着空港での合流、現地での質問回答、なんて書けばいいやろ（Tax Returnや奨学金の締め切りの伝達）

export const worryList = [
  {
    id: 1,
    worry: "TOEFLに時間をかけずに最短で留学したい",
  },
  {
    id: 2,
    worry: "BYU-Provo編入前にアメリカ生活に慣れたい",
  },
  {
    id: 3,
    worry: "高い成績をキープして卒業したい",
  },
  {
    id: 4,
    worry: "高すぎる留学費用は払えない",
  },
  {
    id: 5,
    worry: "日本の大学に魅力を感じない",
  },
  {
    id: 6,
    worry: "異国の土地で自己成長・挑戦したい",
  },
];

export const reasonWhy = [
  {
    id: 1,
    title: "サポートの充実さ",
    description: `
      当サービスでは、実際の現役留学生である私が、
      BYUアイダホへの合格から留学中のサポートまでプランを細分化し、
      必要なサポートかどうかを見極め、それぞれのプランの質を高めています。
      特に、「合格後」「到着後」のサポートは現役留学生だからこそ実現できる、
      留学支援業界において類を見ないサービスです。
      お客様が留学の決心をした瞬間から、
      留学生活の終わりまで、徹底的なサポートをお約束します。
    `,
  },
  {
    id: 2,
    title: "適切な値段設定",
    description: `
      従来、留学支援サービスは入学手続きだけで数十万円という高額な料金が一般的でした。
      しかしながら、実際には不要なサービスが含まれ、莫大な請求が行われることも珍しくありませんでした。
      当サービスでは、必要なサポートだけを盛り込み、適切な価格設定で提供しています。
      さらに広告費・人件費を0円に抑えられており、他社サービスよりも手頃な価格設定を実現。
      実際に自分が行っている留学費用を150万円節約する方法すべてを実践すれば、
      全てのプランを利用しても10％に満たないほどの衝撃価格で、
      お値段以上のサポートを保証。
    `,
  },
  {
    id: 3,
    title: "2年の豊富な経験知識",
    description: `
      私は2021年に入学手続きを行い、
      BYUアイダホへ見事編入。
      2023年現在、アメリカの大学で5年目、
      BYUアイダホでは3年目を迎えます。
      そのため、他社サービスでは難しい、
      現役留学生としての経験と知識を活かしたサポートを実現。
      特に、宗教大学であるBYUアイダホで無宗教者として問題なく生活する方法を熟知しており、無宗教者の方はぜひご相談ください。
      現役留学生だからこそ提供できる、最高品質のサポートを保証します。
    `,
  },
  {
    id: 4,
    title: "BYUアイダホ特化型",
    description: `
      留学斡旋会社は主に仲介料・紹介料で収益を上げており、
      留学希望者にとって最適の大学を選ぶとは言い切れません。
      しかし、当サービスではたった1つの大学、BYUアイダホに特化しており、
      私自身はBYUアイダホにかなり精通していると自負してます。
      もちろん、大学から一切の料金は頂いておりません。
      自分は心の底から、このBYUアイダホでの留学が様々な観点において「最高だ」と断言できます。
      より多くの日本人がこの大学を知り、「留学する機会を失ってほしくない…!」「不安に満ちた留学を安心に変えたい！」という思いだけで、
      留学支援を行っています。
    `,
  },
];

export const faqs = [
  {
    id: 1,
    question: "BYU-Provoへの留学・編入もサポートしてもらえますか？",
    answer: `当サービスでは、BYU-Idahoへの留学のみサポートしております。`,
    open: false,
  },
  {
    id: 2,
    question: "就職支援サポートは含まれますか？",
    answer: `当サービスにおいて、一切の就職支援は行っておりません。`,
    open: false,
  },
  {
    id: 3,
    question: "それぞれ個別でのサポートは可能ですか？",
    answer: `
      もちろん承っています。例えば、合格前の方には合格前サポートのみを勧めます。
    `,
    open: false,
  },
  {
    id: 4,
    question: "無宗教者でもこの大学への留学に問題はありませんか？",
    answer: `
      はい、全く問題ございません。
      私は無宗教者です。
      これまで2年間生活してきて、
      一度も宗教に関する問題はありませんでした。
      あくまで肌感にはなりますが、
      BYUアイダホの日本人留学生の6割は信仰者、3割は改宗者、1割は無宗教者です。
      敬意を払って接すれば、問題なく生活できます。
    `,
    open: false,
  },
  {
    id: 5,
    question: "返金保証はありますか？",
    answer: `
        英語の成績が足りず不合格になってしまった場合のみ、サポートの返金はいたしかねます。
        理由は当サービスの問題ではなく、本人の努力不足に9割よるものだからです。
        また、当サービスではアメリカ大学歴4年の知識・経験の共有をするだけで、
        英語試験対策塾ではございませんので、TOEFLの点数保証は設けておりません。
        その専門知識に関しては、別サービスをご利用ください。
        また、「合格後」プランには返金保証は設けておらず、「到着後」プランには返金保証がございます。
        上記、サポートプランの下部をご確認ください。
    `,
    open: false,
  },
  {
    id: 6,
    question: "キャンパスにいない学期予定はいつですか？",
    answer: `
      23年5月時点では、24年の冬学期 (1月~4月中旬)にインターンシップを行う予定です。
      日本でオフラインで行うと、冬学期はキャンパスにいません。
      希望者に対しては、オンラインでのサポートになること、ご理解ください。
      ぜひご相談をお願いします。
    `,
    open: false,
  },
  {
    id: 7,
    question: "交換留学など、短期での留学は可能ですか？",
    answer: `
      いいえ、BYUアイダホは日本のどの大学とも提携しておらず、短期間での留学は不可能と思われます。
      新入生としてか、別大学からの編入生としての留学のみ可能です。
      編入する場合、すべてが引き継げるわけではありませんが、これまで履修した単位の引き継ぎが可能です。
      そのため、編入する場合は、留学期間の短縮に繋がります。
    `,
    open: false,
  },
  {
    id: 8,
    question: "BYUアイダホ公式の斡旋会社ですか？",
    answer: `
      いいえ、BYUアイダホに特化している留学斡旋エージェントですが、オフィシャルエージェント機関ではありません。
      私自身の経験を元に「こういうのが欲しかった」というサービスを提供しているだけです。
      そのため、大学から仲介料などの収入は一切ございません。
    `,
    open: false,        
  },
  {
    id: 9,
    question: "入学締切はいつですか？",
    answer: `
      秋学期の入学締切は7月1日、冬学期の締切は10月15日、春学期の締切は2月1日です。
      詳しくは以下のリンクからホームページをご確認ください。
    `,
    reference: [
      {
        title: "International Application Deadlines",
        link: "https://www.byui.edu/admissions/application-deadlines",
      },
    ],
    open: false,
  },
];

// ライザップ龍、「確実に」合格するための勉強法を伝授！
// できなかった場合は返金。TOEFLの点数が足りないは返金しない。
//　月1オンライン進捗報告
// 経験を元にしたサポート内容
// すべて活用しても、150万円節約できれば10％に満たない。
// 電話契約

export const mySnsInfo = [
  {
    name: "YouTube",
    icon: YouTubeIcon,
    link: "https://www.youtube.com/channel/@byui_masa",
    description: "10~15分で知識・経験を共有",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/masa.us.univ/",
    description: "留学中の景色を投稿",
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
    link: "https://twitter.com/byui_masa",
    description: "テキストで留学情報を発信",
  },
];
