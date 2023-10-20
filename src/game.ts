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
  position: new Vector3(36.12094497680664, 0, 0.4999999701976776),
  rotation: new Quaternion(1.2866913277572757e-14, -0.7071067690849304, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(0.7250902652740479, 0.7250902652740479, 0.7493414282798767)
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
  position: new Vector3(11.962746620178223, 0, 21.404993057250977),
  rotation: new Quaternion(6.22352418149061e-15, 0.7071068286895752, -8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(0.6374179124832153, 1, 0.7640957236289978)
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
  position: new Vector3(15.097437858581543, 0.4073050022125244, 4.794485092163086),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
externalLink.addComponentOrReplace(transform4)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(14.928897857666016, 1.0937625169754028, 5.563172340393066),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.809082269668579, 1.2060446739196777, 1.206053614616394)
})
imageFromURL.addComponentOrReplace(transform5)

const glossyAethereaTiles = new Entity('glossyAethereaTiles')
engine.addEntity(glossyAethereaTiles)
glossyAethereaTiles.setParent(_scene)
const gltfShape3 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
glossyAethereaTiles.addComponentOrReplace(gltfShape3)
const transform6 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles.addComponentOrReplace(transform6)

const glossyAethereaTiles2 = new Entity('glossyAethereaTiles2')
engine.addEntity(glossyAethereaTiles2)
glossyAethereaTiles2.setParent(_scene)
glossyAethereaTiles2.addComponentOrReplace(gltfShape3)
const transform7 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles2.addComponentOrReplace(transform7)

const glossyAethereaTiles3 = new Entity('glossyAethereaTiles3')
engine.addEntity(glossyAethereaTiles3)
glossyAethereaTiles3.setParent(_scene)
glossyAethereaTiles3.addComponentOrReplace(gltfShape3)
const transform8 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles3.addComponentOrReplace(transform8)

const glossyAethereaTiles4 = new Entity('glossyAethereaTiles4')
engine.addEntity(glossyAethereaTiles4)
glossyAethereaTiles4.setParent(_scene)
glossyAethereaTiles4.addComponentOrReplace(gltfShape3)
const transform9 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles4.addComponentOrReplace(transform9)

const glossyAethereaTiles5 = new Entity('glossyAethereaTiles5')
engine.addEntity(glossyAethereaTiles5)
glossyAethereaTiles5.setParent(_scene)
glossyAethereaTiles5.addComponentOrReplace(gltfShape3)
const transform10 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles5.addComponentOrReplace(transform10)

const glossyAethereaTiles6 = new Entity('glossyAethereaTiles6')
engine.addEntity(glossyAethereaTiles6)
glossyAethereaTiles6.setParent(_scene)
glossyAethereaTiles6.addComponentOrReplace(gltfShape3)
const transform11 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles6.addComponentOrReplace(transform11)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(46.127872467041016, 0.4970592260360718, 9.136075973510742),
  rotation: new Quaternion(-2.177062080483132e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.6573667526245117, 1.0192334651947021, 0.9369871020317078)
})
imageFromURL2.addComponentOrReplace(transform12)

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