export const proto = "http://";
export const protos = "https://";
export const host_ip_local = "127.0.0.1";
export const host_ip = "192.168.3.101";
export const port = ":3000";
export const url_base_ip_distante = protos+host_ip+port; //  a changer si on run sur web browser en local ou sur smartphone en réseau local
export const url_base_ip_local = protos+host_ip_local+port; //  a changer si on run sur web browser en local ou sur smartphone en réseau local
export const url_base = protos+host_ip+port;
export const url_base_http_distant = proto+host_ip+port;
export const url_base_https_aws = protos+"ec2-18-224-190-101.us-east-2.compute.amazonaws.com";

let current_config_ip = url_base_https_aws;
// API
export const API_base = "/api";

console.log("API called from "+current_config_ip+API_base);
// HOME
export const API_home_phrase = current_config_ip+API_base+"/view/home/data";
export const API_home_img_url = current_config_ip+API_base+"/view/home/image";

// PREZ
export const API_all_prez_label_and_data = current_config_ip+API_base+"/view/prez/all_data";
export const API_image_prez = current_config_ip+API_base+"/view/prez/get/url_img";

// SVC
export const API_all_svc_label_and_data = current_config_ip+API_base+'/view/svc/all_data';

// ACTU
export const API_all_actu_data = current_config_ip+API_base+"/actu/all";

// GALLERY
export const API_all_gallery_image =  current_config_ip+API_base+"/image/gallery";

// CONTACT
export const API_send_message = current_config_ip+API_base+"/contact/create";

// PART
export const API_all_part_col = current_config_ip+API_base+"/part/col";
export const API_all_part_part = current_config_ip+API_base+"/part/part";
