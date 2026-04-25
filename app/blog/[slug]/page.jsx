import { permanentRedirect } from 'next/navigation';

export default function BlogArticleRedirectPage({ params }) {
  permanentRedirect(`/insights/${params.slug}`);
}
