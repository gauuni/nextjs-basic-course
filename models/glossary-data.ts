type GlossaryContent = {
  key: string
  title: string
  content: string[][]
}

export const data = [
  {
    key: 'alcohol',
    title: '★飲酒登録機能',
    content: [
      [
        '日々の飲酒の記録をつけてみましょう。',
        'ビール、ワイン、カクテルなど、アルコールの種類は問わず、寝る前にお酒を飲んだ人の心拍数は上昇します。',
        '深酒をすればするほど睡眠中も心拍数が上がったままになるため、レム睡眠とノンレム睡眠のバランスが崩れてしまい、翌朝になっても疲れが取れない不眠症状がでる傾向が高かくなります。',
        '最近、寝ても疲れが取れないという方は、ちょっと飲酒の仕方を見直してみるために、記録をつけてみましょう！',
      ],
    ],
  },
  {
    key: 'amm',
    title: '脳運動トレ評価',
    content: [
      [
        '一般的に、脳の神経細胞は加齢にともなって数が減り、脳は萎縮していきます。脳の萎縮を進行させる要因として、加齢のほかに脳血管性疾患、飲酒、喫煙などが報告されています。一方、ジョギングなどの有酸素運動は脳の萎縮の進行を防ぐことや脳の神経細胞やシナップスを増やす効果があると言われてます。',
        '「脳運動トレ評価」は脳の神経細胞を増やすために効果的な習慣をバイタルデータから読み取り、評価します。',
        '毎日５０ポイント以上の取得を目指しましょう。',
      ],
    ],
  },
  {
    key: 'bmi',
    title: 'BMI',
    content: [
      [
        ' ★BMIとは身長と体重のバランスの指標です。日本肥満学会の定めた基準では18.5未満が「低体重（やせ）」、18.5以上25未満が「普通体重」、25以上が「肥満」とされています。また、BMIが22になるときの体重が標準体重で、最も病気になりにくい状態であるとされています。',
      ],
    ],
  },
  {
    key: 'chat_ai',
    title: 'AIと話す',
    content: [
      ['質問方法や注意事項を知りたいときは右上の[?]を選択してください。'],
    ],
  },
  {
    key: 'chat_gpt',
    title: 'AIに聞く🦻',
    content: [
      [
        '運動、食事に関する事で聞きたいことを具体的に質問することで、AIが回答をしてくれます。',

        '質問例）現在、体重が８０キロです。３カ月間で５キロやせる為にはどのくらい歩いたらいいでしょうか？',

        '「回答は、体重を5キロ減らすためには、約38,500キロカロリーのエネルギー消費が必要です（1キログラムの体重減少には約7,700キロカロリーのエネルギー消費が必要とされています）。」',

        '「3カ月間で5キロの減量を目指す場合、90日間で38,500キロカロリーを消費する必要があります。1日あたりの目標消費エネルギー量は、38,500キロカロリー ÷ 90日 = 428キロカロリーです。」',

        '「歩くことによるカロリー消費は、個人の体重、歩く速度、距離によって異なります。ただし、一般的には、80キログラムの人が1時間歩くことで、おおよそ300キロカロリーを消費するとされています（歩く速度が速いほど、カロリー消費は増えます）。」',

        '「この場合、1日に428キロカロリーを消費するためには、おおよそ1時間20分程度歩くことが目安になります。ただし、これはあくまで目安であり、実際のカロリー消費量は個人差があるため、運動量や強度を調整して、自分に適した計画を立ててください。」',

        '「また、運動だけでなく、食事の改善や他の運動も取り入れることで、効果的に体重を減らすことができます。運動プログラムや食事制限については、医師や栄養士と相談しながら取り組むことが望ましいです」',
      ],
    ],
  },
  {
    key: 'check_in',
    title: 'チェックイン',
    content: [
      [
        'イベントの参加を記録する機能になります。',
        '位置情報とQRコードを読み込み登録することができます。',
        'イベントへ参加することでEDYが付与されるイベントなどもあります。',
        'チェックインできる所へ行って、画面の下にあるQRコードマークをタップし、QRコードを読み込むとチェックインできます。',
      ],
    ],
  },
  {
    key: 'health_check',
    title: '健康診断結果入力',
    content: [
      [
        '★健康診断情報',
        '健康診断情報を登録することができます。',
        '写真も保存できます。',
      ],
    ],
  },
  {
    key: 'nutri',
    title: '摂取カロリー',
    content: [
      [
        '▶︎食事の記録方法',
        '食事の記録方法は下記の３つの方法があります。',
        '（１）手入力　',
        '（２）食品検索　（音声入力 or テキスト入力）　',
        '（３）バーコード読取',
        '▶︎PFCバランス',
        'PFCバランスとは、三大栄養素であるProtein（たんぱく質）、Fat（脂質）、Carbohydrate（炭水化物）それぞれの栄養素が総エネルギーに対してどれくらいの割合を占めるかを示した比率になります。',
        '理想バランスはP 13-20％：F 20-30％：C 50-65％です。',
      ],
    ],
  },
  {
    key: 'po_booking',
    title: '★特定保健指導予約　手順方法',
    content: [
      [
        '①一覧から、ご自身の自治体名か企業健保名を選択してください。一覧に該当がない場合は、検索窓に自治体名または企業健保名を入力してください。',
        '②次に予約方法を選択していただきます。ICリーダーを選択する場合、マイナンバーカードまたは運転免許証を選択し、スキャンしていただきます。',
        '③スキャン後、個人情報（姓、名、性別、住所）が自動で入力され、画面の指示に従ってやっていただければ予約完了です。',
        '②予約方法で手入力を選択する場合、画面の指示に従って情報を入力していただければ予約完了です。',
      ],
    ],
  },
  {
    key: 'questionnaire',
    title: 'アンケート',
    content: [
      [
        '★アンケート機能',
        '特定保健指導の感想のアンケートや健康に関するアンケートなどを実施されます。アンケートの種類によっては回答するとEDYも付与されます',
      ],
    ],
  },
  {
    key: 'quit_smoking',
    title: '★禁煙機能',
    content: [
      [
        'たばこをやめよう！と思っているが、なかなかやめられない・・という方は',
        'まずは禁煙機能をスタートさせてみましょう。',
        '禁煙している時間の経過と、たばこ代をいくら節約したかがわかります。',
        '禁煙はマラソンのようなものと考えて、Vitalgainアプリのコンテストなどに参加しながら、気を紛らせながら、少しずつ禁煙時間が伸ばせるようにチャレンジしましょう！',
      ],
    ],
  },
  {
    key: 'stress',
    title: 'ストレス指数',
    content: [
      [
        '心拍数、睡眠データなどからストレスレベルを測定します。',
        'ストレスは高血圧、心臓病など様々な病気の原因とされています。平均ストレスレベル30未満を目指しましょう。',
      ],
    ],
  },
  {
    key: 'water',
    title: '水分',
    content: [
      [
        '★適度に水分補給できているか確認することができます。',
        '​一日2リットル程度の水を飲むことが適切とされています。',
        '※ボトルをタップすると、手入力で細かい水分量を登録できます。＋、－ボタンをタップすると、250mlずつ登録できます。',
      ],
    ],
  },
  {
    key: 'wearing_time',
    title: '装着時間',
    content: [
      [
        '★装着時間',
        'ウェアラブルの装着時間を表示します。',
        '正しくデータを取るために、1日のうち19時間（80%）装着することが望ましいです。',
      ],
    ],
  },
  {
    key: 'zoom',
    title: 'Zoom ミーティング',
    content: [
      [
        '★Zoom　連携',
        'お持ちのZOOMアカウントでミーティングを開催することや、ミーティングに参加することができます。',
        'ミーティングに参加する場合はミーティングIDとパスワード（パスコード）で参加ができます。',
      ],
    ],
  },
  {
    key: 'resting_temperature',
    title: '睡眠時体表温',
    content: [
      [
        '睡眠時の体温を計測します。',
        '体温と睡眠は深い関係があります。',
        '日中、活動をしている間は体温が高く保たれていますが',
        '眠りにつくときには、深部体温を下げることで、脳と体をしっかり休息させる仕組みがあります。',
        '深い睡眠を多くとることで夜間の体温は大きく下がります。',
        'また、深い眠りをとれている時間帯は「成長ホルモン」が多く分泌され、糖や脂質なでおの代謝を促進します。',
      ],
      [
        '眠っている間体温は、低いままキープされ、目覚めに向けて体温が上がります。',
        '深部体温があがり、皮膚温が変化することで準備が整い、起床すると体温は上昇、活発に過ごせるように変化します。',
      ],
      [
        '睡眠には大きくわけてレム睡眠とノンレム睡眠の二つの状態があり、',
        'レム睡眠は体が眠っている状態、ノンレム睡眠は脳が眠っている状態です。',
        'この二つの状態は、交互に繰り返されています。特に、ノンレム睡眠が多いと、放熱が非常に活発になり、発汗を伴い、体温の低下が大きくなります。',
      ],
    ],
  },
  {
    key: 'panasonic_face_recognition',
    title: '',
    content: [
      [
        '●顔認証を登録する場合',
        '・顔認証を撮影するために自分の顔を枠の中に入れてください。',
        '・メガネをかけながら顔認証を登録できますが、マスクをかけながら顔認証は登録できない場合があります。',
        '・登録が失敗しても、何回でも登録可能です。',
      ],
      [
        '●顔認証の変更したい場合',
        '・いつでも顔認証を変更することができます。',
        '・アプリの「設定」→「セキュリティ」→ 「顔認証の写真を変更する」で変更ができます。',
      ],
      [
        '●チェックイン（顔認証が登録済みの場合）',
        '・ダッシュボードにある「チェックイン」機能をタップし、チェックインイベントの顔認証マークをタップ。正しく撮影したらチェックイン成功です。顔認証の撮影に多く失敗した場合、この機能が一時的にロックされるのでご注意ください。',
      ],
      [
        '●チェックイン（顔認証が未登録の場合）',
        '・ダッシュボードにある「チェックイン」機能をタップし、チェックインイベントの顔認証マークをタップし、「●顔認証を登録する場合」にしたがってやってください。',
      ],
    ],
  },
  {
    key: 'step',
    title: '歩数',
    content: [
      [
        '★活動量時間',
        'アクティブに動いていた時間の合計。1日の目標は40分以上を目標にしましょう。',
      ],
      [
        '★歩数',
        '1日の目標は8,000歩を目指し、月間24万歩以上で　健康効果が期待できます。',
      ],
      [
        '▶最大運動強度メッツ',
        '1日で一番アクティブに活動した際の運動強度3以上の運動を30分以上継続することで健康効果が期待できます。',
      ],
    ],
  },
  {
    key: 'temperature',
    title: '温度',
    content: [
      [
        '★温度',
        '表皮温度を確認することができます。',
        '<b>37.5度以上が表示される場合は医療機器の体温計で計測しましょう。</b>',
        '<b>発熱の症状があれば医療機関へ相談してください。</b>',
      ],
    ],
  },
  {
    key: 'skin_temperature',
    title: '表皮温度',
    content: [
      [
        '★温度',
        '表皮温度を確認することができます。',
        '<b>37.5度以上が表示される場合は医療機器の体温計で計測しましょう。</b>',
        '<b>発熱の症状があれば医療機関へ相談してください。</b>',
      ],
    ],
  },
  {
    key: 'energy',
    title: 'エネルギーバランス',
    content: [
      [
        `★エネルギーバランスとは、摂取カロリーと消費カロリーのバランスです。減量のためには消費カロリー<span style="color:red">「-180kcal」</span>を目指しましょう。`,
        '１カ月平均-180カロリーの場合１キロの減量効果が期待できます。',
      ],
    ],
  },
  {
    key: 'blood_oxygen',
    title: '血中酸素量',
    content: [
      [
        '★血中酸素量',
        '血液の中には、酸素を運搬する赤血球が含まれています。この赤血球の中にある「ヘモグロビン」の何%が酸素とくっついているかを見るのが「血中酸素量」です。（※一部の機能では体内酸素量と表現されています）',
        '安静時の正常値は96% ~ 99%とされています。',
      ],
      [
        `<span style="color:red">▶︎注意点：</span>`,
        '<b>数値は安静時の目安です。基準値と大幅に異なる場合は専門医にご相談ください。</b>',
      ],
    ],
  },
  {
    key: 'blood_pressure',
    title: '血圧',
    content: [
      [
        '血圧は心臓から流れる血液が血管を押す圧力です。正常値の目安としては最高血圧が120mmHg未満かつ最低血圧が80mmHg未満と言われています。',
        '高血圧は脳卒中や心臓病のリスクを増加させます。',
      ],
      [
        `<span style="color:red">▶︎注意点：</span>`,
        '<b>数値は安静時の目安です。</b>',
        '<b>最高血圧が160mmHgを超える場合、最低血圧が100mmHgを超える場合など基準値と大幅に異なる場合は専門医にご相談ください。</b>',
      ],
    ],
  },
] as GlossaryContent[]

function createData(title: string, items: string[], note: string) {
  return { title, items, note }
}

export const exchangeData = [
  createData(
    'Edy',
    ['手数料10％　200ポイントから交換可能', '例）220ポイント→200円分'],
    '毎週木曜日まで受付、週末送金対応',
  ),
  createData(
    'Amazonギフト券',
    [
      '手数料10％',
      '220ポイント→200円券',
      '550ポイント→500円券',
      '880ポイント→800円券',
      '1100ポイント→1000円券',
    ],
    '毎月20日まで受付、当月末送金対応',
  ),
  createData(
    'nanacoギフト',
    [
      '手数料10％',
      '220ポイント→200円券',
      '550ポイント→500円券',
      '880ポイント→800円券',
      '1100ポイント→1000円券',
    ],
    '毎月20日まで受付、当月末送金対応',
  ),
  createData(
    'Pontaポイントコード',
    [
      '手数料10％',
      '220ポイント→200円券',
      '550ポイント→500円券',
      '880ポイント→800円券',
      '1100ポイント→1000円券',
    ],
    '毎月20日まで受付、当月末送金対応',
  ),
  createData(
    'EJOICAセレクトギフトSUICA',
    ['手数料30％', '650ポイント→500円券', '1300ポイント→1000円券'],
    '毎月20日まで受付、当月末送金対応',
  ),
  createData(
    'EJOICAセレクトギフトWAON',
    ['手数料30％', '650ポイント→500円券', '1300ポイント→1000円券'],
    '毎月20日まで受付、当月末送金対応',
  ),
  createData(
    'PayPayポイント',
    [
      '手数料20％ 200ポイントから交換可能',
      '例）240ポイント→PayPayポイント200ポイント分',
    ],
    '毎月20日まで受付、当月末送金対応',
  ),
]