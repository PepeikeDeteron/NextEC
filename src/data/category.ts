export type CategoryProps = {
  type: string
  name: string
}

export const categories: CategoryProps[] = [
  {
    type: 'beer_and_low-malt-beer',
    name: 'ビール・発泡酒',
    // ビール・生ビール・発泡酒・第三のビール etc.
  },
  {
    type: 'japanese-rice-wine',
    name: '日本酒',
    // 吟醸酒・純米酒・本醸造・冷酒・濁り酒・健康酒・合成酒 etc.
  },
  {
    type: 'japanese-distilled-spirits',
    name: '焼酎',
    // 麦焼酎・芋焼酎・米焼酎・蕎麦焼酎・黒糖焼酎・泡盛・韓国焼酎 etc.
  },
  {
    type: 'wine',
    name: 'ワイン',
    // ボルドーワイン・ブルゴーニュワイン・国産ワイン・シャンパン・スパークリング etc.
  },
  {
    type: 'western-liquor',
    name: '洋酒',
    // ウィスキー・ブランデー・スピリッツ・リキュール・チューハイ・カクテル etc.
  },
]
