import { Heading } from './Typography';

export const TypographyExample = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row gap-x-8 items-end'>
        <Heading variation='h1'>H1 heading</Heading>
        <Heading variation='h2'>H2 heading</Heading>
        <Heading variation='h3'>H3 heading</Heading>
        <Heading variation='h4'>H4 heading</Heading>
        <Heading variation='h5'>H5 heading</Heading>
        <Heading variation='h6'>H6 heading</Heading>
      </div>
      <p className='mb-0'>
        this is paragraph text - Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus in dui facilisis turpis bibendum aliquam. Fusce
        mattis leo feugiat nulla pulvinar, ac blandit turpis vulputate. Proin
        nec justo eu lorem gravida aliquam tincidunt ut nunc. Suspendisse
        facilisis tortor in ante tristique lacinia. Proin placerat blandit leo.
        Nunc gravida, enim nec pretium condimentum, sem lorem tincidunt tellus,
        sed bibendum metus augue ac mauris. Integer pretium lacus at egestas
        hendrerit. Morbi quam arcu, suscipit sed massa sit amet, finibus gravida
        nisl. In lectus massa, ullamcorper eget aliquet pulvinar, vehicula ac
        sapien. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Aliquam suscipit sodales sapien. Fusce
        cursus, turpis id aliquam feugiat, nisl nulla blandit velit, at posuere
        sapien orci vel purus. Nam congue ultricies ornare. Duis accumsan cursus
        neque, eu porta turpis.
      </p>
    </div>
  );
};
