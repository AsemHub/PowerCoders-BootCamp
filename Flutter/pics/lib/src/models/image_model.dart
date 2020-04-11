class ImageModel {
  int id;
  String url;
  String title;

  ImageModel(this.id, this.url, this.title);

  ImageModel.fromJason(parcedJason) {
    id = parcedJason['id'];
    url = parcedJason['url'];
    title = parcedJason['title'];
  }
}
