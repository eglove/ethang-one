import { CourseUrl } from '@ethang/local-database';
import { NextLink } from '@ethang/react-components';

type CourseLinkProperties = {
  courseUrl: CourseUrl;
};

export function CourseLink({ courseUrl }: CourseLinkProperties): JSX.Element {
  return (
    <div>
      <NextLink isNewTab linkProperties={{ href: courseUrl.url.href }}>
        {courseUrl.school.name}
      </NextLink>
      &ensp;
    </div>
  );
}
