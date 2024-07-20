import TestImage from '%/test.png'

const indexData = {
  hero: {
    id: 0,
    text: `Hey there, we are Mommie's Devs 👀. A team of developers creating innovative software products. More about my experience read <a href="/about" class="text-primary hover:underline">here</a>.`,
  },
  test: {
    id: 1,
    heading: `SOME PROJECT`,
    text: `Our team developed a software solution that enhances productivity and streamlines workflows.`,
    image: TestImage,
    link: 'https://yandex.com',
  },
  test2: {
    id: 2,
    heading: `SOME 2 PROJECT`,
    text: `Our team doesnt exist. its just the matrix.`,
    image: TestImage,
    link: 'https://yandex.com',
  },
  test3: {
    id: 3,
    heading: `SOME 3 PROJECT`,
    text: `Our team developed microsoft.`,
    image: TestImage,
    link: 'https://yandex.com',
  },
}

export const {hero, test, test2, test3} = indexData
