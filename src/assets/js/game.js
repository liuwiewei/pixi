import * as PIXI from 'pixi.js'
const _w = window.innerWidth
const _h = window.innerHeight
const app = new PIXI.Application({
  width: _w,
  height: _h,
  antialias: true
})
document.body.appendChild(app.view)
app.renderer.backgroundColor = 0x061639
app.renderer.autoResize = true

const earthSpriteArray = [
  '/static/img/p1_pink_0.png',
  '/static/img/p1_pink_1.png',
  '/static/img/p1_pink_2.png',
  '/static/img/p1_pink_3.png',
  '/static/img/p1_pink_4.png',
  '/static/img/p1_pink_5.png',
  '/static/img/p1_pink_6.png',
  '/static/img/p1_pink_7.png',
  '/static/img/p1_pink_8.png',
  '/static/img/p1_pink_9.png',
  '/static/img/p1_pink_10.png',
  '/static/img/p1_pink_11.png',
  '/static/img/p1_pink_12.png',
  '/static/img/p1_pink_13.png',
  '/static/img/p1_pink_14.png',
  '/static/img/p1_pink_15.png',
  '/static/img/p1_pink_16.png',
  '/static/img/p1_pink_17.png',
  '/static/img/p1_pink_18.png',
  '/static/img/p1_pink_19.png'
]
const waterSpriteArray = [
  '/static/img/p1_s_0.png',
  '/static/img/p1_s_1.png',
  '/static/img/p1_s_2.png',
  '/static/img/p1_s_3.png',
  '/static/img/p1_s_4.png',
  '/static/img/p1_s_5.png',
  '/static/img/p1_s_6.png',
  '/static/img/p1_s_7.png',
  '/static/img/p1_s_8.png',
  '/static/img/p1_s_9.png',
  '/static/img/p1_s_10.png',
  '/static/img/p1_s_11.png',
  '/static/img/p1_s_12.png',
  '/static/img/p1_s_13.png',
  '/static/img/p1_s_14.png',
  '/static/img/p1_s_15.png',
  '/static/img/p1_s_16.png',
  '/static/img/p1_s_17.png',
  '/static/img/p1_s_18.png',
  '/static/img/p1_s_19.png',
  '/static/img/p1_s_20.png',
  '/static/img/p1_s_21.png',
  '/static/img/p1_s_22.png',
  '/static/img/p1_s_23.png',
  '/static/img/p1_s_24.png'
]
const spriteObj = []
const waterSpriteObj = []
// 创建地球精灵图
const setUp = () => {
  let sprite
  earthSpriteArray.forEach((item) => {
    sprite = new PIXI.Sprite(
      PIXI.loader.resources[item].texture
    )
    sprite.position.set(0, 0)
    sprite.width = 300
    sprite.height = 250
    app.stage.addChild(sprite)
    sprite.visible = false
    spriteObj.push(sprite)
  })
  let count = 0
  const loop = () => {
    spriteObj.forEach(val => {
      val.visible = false
    })
    spriteObj[Math.floor(count)].visible = true
    count += 0.18
    if (count >= 19) {
      count = 0
    }
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
  let waterSprite
  waterSpriteArray.forEach((item, index) => {
    waterSprite = new PIXI.Sprite(
      PIXI.loader.resources[item].texture
    )
    waterSprite.position.set(65, -20)
    waterSprite.width = 230
    waterSprite.height = 297
    app.stage.addChild(waterSprite)
    waterSprite.visible = false
    waterSpriteObj.push(waterSprite)
  })
  let waterCount = 0
  const waterLoop = () => {
    waterSpriteObj.forEach(val => {
      val.visible = false
    })
    waterSpriteObj[Math.floor(waterCount)].visible = true
    waterCount += 0.18
    if (waterCount >= 25) {
      waterCount = 0
    }
    requestAnimationFrame(waterLoop)
  }
  requestAnimationFrame(waterLoop)
}

PIXI.loader
  .add(earthSpriteArray)
  .add(waterSpriteArray)
  .load(setUp)
