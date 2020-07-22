export var proto = "http://";
export var protos = "https://";
export var host_ip_local = "127.0.0.1";
export var host_ip = "192.168.3.101";
export var port = ":3000";
export var url_base_ip_distante = protos + host_ip + port; //  a changer si on run sur web browser en local ou sur smartphone en réseau local
export var url_base_ip_local = protos + host_ip_local + port; //  a changer si on run sur web browser en local ou sur smartphone en réseau local
export var url_base = protos + host_ip + port;
export var url_base_http_distant = proto + host_ip + port;
export var url_base_https_aws = protos + "ec2-18-224-190-101.us-east-2.compute.amazonaws.com";
var current_config_ip = url_base_https_aws;
// API
export var API_base = "/api";
console.log("API called from " + current_config_ip + API_base);
// HOME
export var API_home_phrase = current_config_ip + API_base + "/view/home/data";
export var API_home_img_url = current_config_ip + API_base + "/view/home/image";
// PREZ
export var API_all_prez_label_and_data = current_config_ip + API_base + "/view/prez/all_data";
export var API_image_prez = current_config_ip + API_base + "/view/prez/get/url_img";
// SVC
export var API_all_svc_label_and_data = current_config_ip + API_base + '/view/svc/all_data';
// ACTU
export var API_all_actu_data = current_config_ip + API_base + "/actu/all";
// GALLERY
export var API_all_gallery_image = current_config_ip + API_base + "/image/gallery";
// CONTACT
export var API_send_message = current_config_ip + API_base + "/contact/create";
// PART
export var API_all_part_col = current_config_ip + API_base + "/part/col";
export var API_all_part_part = current_config_ip + API_base + "/part/part";
//# sourceMappingURL=constant.js.map