import { markdownify } from "@lib/utils/textConverter";

function Privacy({ data }) {
  const { frontmatter } = data;
  const { policy, title } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="content font-light">
          {markdownify(policy, "p", "text-center font-normal")}
        </div>
      </div>
    </section>
  );
}

export default Privacy;
