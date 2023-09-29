import os
import json

folder_path = 'E:/NEST/gallery/public/img_gallery/set_group_1'
file_names = os.listdir(folder_path)
#filtered_file_names = [file for file in file_names if file.endswith('.txt')]

file_dict = {'file_names': file_names}

output_json_path = 'E:/NEST/gallery/src/components/filename_img_gallery.json'

with open(output_json_path, 'w') as json_file:
    json.dump(file_dict, json_file, indent=4)
