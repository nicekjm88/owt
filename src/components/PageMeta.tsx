import React from 'react';
 
interface PageMetaProps {
  title: string;
  description?: string;
}
 
export default function PageTitle({ title, description = 'Hello World' }: PageMetaProps) {
  return (
    <>
      <title>OWT | {title}</title>
      <meta name="description" content={description} />
    </>
  );
}