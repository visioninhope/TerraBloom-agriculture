const createURL = (path: string) => {
  const url = window.location.href + path;
  return url;
};

export const postUpload = async ({
  title,
  content,
  image,
  video,
  file,
  gif,
}) => {
  const res = await fetch(new Request("/api/newPost"), {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
      image,
      video,
      file,
      gif,
    }),
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};
