export type CoursesDetail = {
  _class: string;
  id: number;
  image_125_H: string;
  image_240x135: string;
  image_480x270: string;
  is_paid: boolean;
  is_practice_test_course: boolean;
  price: string;
  price_detail: PriceDetail;
  price_serve_tracking_id: string;
  published_title: string;
  title: string;
  tracking_id: string;
  url: string;
  visible_instructors: VisibleInstructor[];
};

export type PriceDetail = {
  amount: number;
  currency: string;
  currency_symbol: string;
  price_string: string;
};

export type VisibleInstructor = {
  _class: string;
  display_name: string;
  image_100x100: string;
  image_50x50: string;
  initials: string;
  job_title: string;
  name: string;
  title: string;
  url: string;
};
