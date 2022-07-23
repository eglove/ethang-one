import { Blog, Image, persons } from '@ethang/local-database';
import { NextImageContainer } from '@ethang/react-components';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';

const editPdfBlog = new Blog({
  authors: [persons.ethanGlover],
  createdAt: new Date('June 6, 2022 08:06 AM'),
  description: 'A short guide of editing PDFs with Office Mobile',
  featuredImage: new Image({
    altText: 'Microsoft Office',
    height: 128,
    url: '/images/blog/microsoft-office.svg',
    width: 128,
  }),
  slug: 'edit-pdf-office-mobile',
  title: 'How to Edit PDFs with Office Mobile',
  updatedAt: new Date('June 6, 2022 08:06 AM'),
});

function EditPdfOfficeMobile(): JSX.Element {
  return (
    <StaticBlogLayout blog={editPdfBlog}>
      <h2>Download the PDF</h2>
      <p>
        This will put the file in the &ldquo;Download&rdquo; folder on Android.
      </p>
      <NextImageContainer
        image={{
          altText: 'Download PDF from Gmail',
          height: 500,
          url: 'https://i.imgur.com/IT33nA0.png',
          width: 230.77,
        }}
      />
      <h2>Open the PDF in Office</h2>
      <ol>
        <li>Press the folder icon on the top right in the Office app.</li>
        <NextImageContainer
          image={{
            altText: 'Press folder icon.',
            height: 500,
            url: 'https://i.imgur.com/krB2aiC.png',
            width: 230.77,
          }}
        />
        <li>
          Go to &ldquo;This Device&rdquo; to see all files saved on your phone.
          <NextImageContainer
            image={{
              altText: 'Press This Device',
              height: 500,
              url: 'https://i.imgur.com/3NWpmDy.png',
              width: 230.77,
            }}
          />
        </li>
        <li>
          Go to &ldquo;Download&rdquo; to find the files you&apos;ve downloaded.
          <NextImageContainer
            image={{
              altText: 'Press Download folder.',
              height: 500,
              url: 'https://i.imgur.com/4B1DCDj.png',
              width: 230.77,
            }}
          />
        </li>
        <li>
          Find the file you just downloaded and open it up.
          <NextImageContainer
            image={{
              altText: 'Find file to open up.',
              height: 500,
              url: 'https://i.imgur.com/GfSh89H.png',
              width: 230.77,
            }}
          />
        </li>
      </ol>
      <h2>Convert PDF to Word</h2>
      <ol>
        <li>
          Once the file is open, press the options menu.
          <NextImageContainer
            image={{
              altText: 'Office file options.',
              height: 500,
              url: 'https://i.imgur.com/buJCVLp.png',
              width: 230.77,
            }}
          />
        </li>
        <li>
          Press the Convert to Word option.
          <NextImageContainer
            image={{
              altText: 'Convert file to Word',
              height: 500,
              url: 'https://i.imgur.com/trLGzlR.png',
              width: 230.77,
            }}
          />
        </li>
        <li>
          You can now zoom in and edit the file!
          <NextImageContainer
            image={{
              altText: 'Edit the file.',
              height: 500,
              url: 'https://i.imgur.com/pwe8vSL.png',
              width: 230.77,
            }}
          />
        </li>
        <li>
          After you make your changes, open the options menu again and
          you&apos;ll have a few choices. (If you don&apos;t see the options
          menu, just scroll up.)
          <NextImageContainer
            image={{
              altText: 'Open options for Word document.',
              height: 500,
              url: 'https://i.imgur.com/ogR5xMw.png',
              width: 230.77,
            }}
          />
        </li>
        <li>
          You can share the file as PDF, save, print, etc.
          <NextImageContainer
            image={{
              altText: 'Options for word document.',
              height: 500,
              url: 'https://i.imgur.com/slONqbY.png',
              width: 230.77,
            }}
          />
        </li>
        <li>
          If you choose to save the file, press &ldquo;Save As&rdquo; and save
          the document in the &ldquo;Documents&rdquo; folder.
          &ldquo;Download&rdquo; should be considered temporary, if you want to
          keep anything be sure to save it here.
          <NextImageContainer
            image={{
              altText: 'Save as Documents',
              height: 500,
              url: 'https://i.imgur.com/D7MT7Zy.png',
              width: 230.77,
            }}
          />
        </li>
        <li>
          You can then rename the file to whatever you like and save it.
          <NextImageContainer
            image={{
              altText: 'Rename file',
              height: 500,
              url: 'https://i.imgur.com/GLa9G8Y.png',
              width: 230.77,
            }}
          />
        </li>
        <li>
          Then, when you go back to your Home screen, you should see a list of
          files that you&apos;ve edited and saved.
          <NextImageContainer
            image={{
              altText: 'List of files on Office homepage.',
              height: 500,
              url: 'https://i.imgur.com/HoFwXuz.png',
              width: 230.77,
            }}
          />
        </li>
      </ol>
    </StaticBlogLayout>
  );
}

export default EditPdfOfficeMobile;
