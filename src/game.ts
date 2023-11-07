import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script2 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const ent = new Entity('ent')
engine.addEntity(ent)
ent.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(0.7775297164916992, 6.556510925292969e-7, 12.575572967529297),
  rotation: new Quaternion(3.0521640055435452e-15, 5.960464477539063e-8, -1.359642125042847e-14, 1),
  scale: new Vector3(0.7250906229019165, 0.7250902652740479, 0.7493419647216797)
})
ent.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("28570566-60aa-40f8-8163-30796916da6d/ent.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
ent.addComponentOrReplace(gltfShape)

const road = new Entity('road')
engine.addEntity(road)
road.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(21.22247314453125, 0.0000036954879760742188, 35.9680061340332),
  rotation: new Quaternion(-1.5898050325475425e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(0.6582372188568115, 1, 0.761204183101654)
})
road.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("329c7a2f-3a0b-4bb0-9822-47cd770a052a/road.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
road.addComponentOrReplace(gltfShape2)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(5.740260601043701, 0.24792373180389404, 33.60734176635742),
  rotation: new Quaternion(8.650434935150633e-15, -5.960464477539063e-8, 1.8378002705808985e-14, 1),
  scale: new Vector3(1.0000054836273193, 1, 1.0000054836273193)
})
externalLink.addComponentOrReplace(transform4)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(5.715831279754639, 1.0937654972076416, 33.78028869628906),
  rotation: new Quaternion(9.082819843735535e-15, -5.960464477539063e-8, 1.4825289027008484e-14, 1),
  scale: new Vector3(1.809086799621582, 1.2060446739196777, 1.2060555219650269)
})
imageFromURL.addComponentOrReplace(transform5)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(9.648666381835938, 0.4970555603504181, 2.564697265625),
  rotation: new Quaternion(3.524067659799071e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.6573753356933594, 1.0192334651947021, 0.9369896054267883)
})
imageFromURL2.addComponentOrReplace(transform6)

const glossyAethereaTiles = new Entity('glossyAethereaTiles')
engine.addEntity(glossyAethereaTiles)
glossyAethereaTiles.setParent(_scene)
const gltfShape3 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
glossyAethereaTiles.addComponentOrReplace(gltfShape3)
const transform7 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles.addComponentOrReplace(transform7)

const glossyAethereaTiles2 = new Entity('glossyAethereaTiles2')
engine.addEntity(glossyAethereaTiles2)
glossyAethereaTiles2.setParent(_scene)
glossyAethereaTiles2.addComponentOrReplace(gltfShape3)
const transform8 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles2.addComponentOrReplace(transform8)

const glossyAethereaTiles3 = new Entity('glossyAethereaTiles3')
engine.addEntity(glossyAethereaTiles3)
glossyAethereaTiles3.setParent(_scene)
glossyAethereaTiles3.addComponentOrReplace(gltfShape3)
const transform9 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles3.addComponentOrReplace(transform9)

const glossyAethereaTiles4 = new Entity('glossyAethereaTiles4')
engine.addEntity(glossyAethereaTiles4)
glossyAethereaTiles4.setParent(_scene)
glossyAethereaTiles4.addComponentOrReplace(gltfShape3)
const transform10 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles4.addComponentOrReplace(transform10)

const glossyAethereaTiles5 = new Entity('glossyAethereaTiles5')
engine.addEntity(glossyAethereaTiles5)
glossyAethereaTiles5.setParent(_scene)
glossyAethereaTiles5.addComponentOrReplace(gltfShape3)
const transform11 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles5.addComponentOrReplace(transform11)

const glossyAethereaTiles6 = new Entity('glossyAethereaTiles6')
engine.addEntity(glossyAethereaTiles6)
glossyAethereaTiles6.setParent(_scene)
glossyAethereaTiles6.addComponentOrReplace(gltfShape3)
const transform12 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles6.addComponentOrReplace(transform12)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(externalLink, {"url":"https://metatokyo.xyz/"}, createChannel(channelId, externalLink, channelBus))
script2.spawn(imageFromURL, {"image":"https://static.wixstatic.com/media/ebffef_34b695dc6bcd4448a66b09b460b24b46~mv2.png"}, createChannel(channelId, imageFromURL, channelBus))
script2.spawn(imageFromURL2, {"image":"https://static.wixstatic.com/media/ebffef_34b695dc6bcd4448a66b09b460b24b46~mv2.png"}, createChannel(channelId, imageFromURL2, channelBus))