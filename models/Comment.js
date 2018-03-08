function Comment(defaultData) {
    defaultData = defaultData || {};
    
    this.postId = defaultData.postId;
    this.id = defaultData.id;
    this.name = defaultData.name;
    this.email = defaultData.email;
    this.body = defaultData.body;
}