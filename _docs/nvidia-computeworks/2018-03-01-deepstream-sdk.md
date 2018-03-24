---
title: How to install DeepStream SDK 1.5
permalink: /docs/2018-03-01-deepstream-sdk/
---

<br/>
###### Note: DeepStream SDK is based on the following libraries, please download them before building.

| Packages             | Version                  |
| -------------------- | ------------------------ |
| Ubuntu               | 16.04 LTS (with GCC 5.4) |
| Display driver       | 384                      |
| CUDA                 | 9.0                      |
| cuDNN                | 7.0.4                    |
| VideoSDK             | 8.0.14                   |
| TensorRT             | 3.0                      |
 
<br/> 
###### [CUDA Toolkit 9.0 RUNFILE Packages](https://developer.nvidia.com/cuda-90-download-archive?target_os=Linux&target_arch=x86_64&target_distro=Ubuntu&target_version=1604&target_type=runfilelocal) (Recommended)
```console
sudo sh cuda_9.0.176_384.81_linux.run
```
```
Install NVIDIA Accelerated Graphics Driver for Linux-x86_64 384.81?
(y)es/(n)o/(q)uit: n
```

OR

```console
sudo cuda_9.0.176_384.81_linux.run -silent -driver
```

<br/>
###### [CUDA Toolkit 9.0 DEB Packages](https://developer.nvidia.com/cuda-90-download-archive?target_os=Linux&target_arch=x86_64&target_distro=Ubuntu&target_version=1604&target_type=debnetwork) (Not Recommended)
```console
sudo dpkg -i cuda-repo-ubuntu1604_9.0.176-1_amd64.deb
sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1604/x86_64/7fa2af80.pub
sudo apt-get update
sudo apt-get install cuda
```

To uninstall the CUDA Toolkit, run the uninstall script in /usr/local/cuda-9.0/bin

<br/>
###### [cuDNN v7.0.4 for CUDA 9.0](https://developer.nvidia.com/rdp/cudnn-download)
```console
tar -xzvf cudnn-9.0-linux-x64-v7.tgz
sudo cp cuda/include/cudnn.h /usr/local/cuda/include 
sudo cp cuda/lib64/libcudnn* /usr/local/cuda/lib64 
sudo chmod a+r /usr/local/cuda/include/cudnn.h /usr/local/cuda/lib64/libcudnn*
```

<br/>
###### [TensorRT 3.0.2 for Ubuntu 16.04 and CUDA 9.0 TAR packages](https://developer.nvidia.com/compute/machine-learning/tensorrt/3.0/ga/TensorRT-3.0.4.Ubuntu-16.04.3.x86_64.cuda-9.0.cudnn7.0-tar.gz) (Recommended)
```console
tar xzvf TensorRT-3.0.2.Ubuntu-16.04.3.x86_64.cuda-9.0.cudnn7.0.tar.gz
mv TensorRT-3.0.2 /usr/local
```

<br/>
###### [TensorRT 3.0.2 for Ubuntu 16.04 and CUDA 9.0 DEB packages](https://developer.nvidia.com/nvidia-tensorrt-download) (Not Recommended)
```console
sudo dpkg -i nv-tensorrt-repo-ubuntu1604-ga-cuda9.0-trt3.0.2-20180108_1-1_amd64.deb
sudo apt-key add /var/nv-tensorrt-repo-ga-cuda9.0-trt3.0.2-20180108/7fa2af80.pub
sudo apt-get update
sudo apt-get install tensorrt
```

<br/>
###### Edit .bashrc
```console
gedit ~/.bashrc

export CUDA=cuda-9.0
export TENSORRT=/usr/local/TensorRT-3.0.2
export PATH=/usr/local/${CUDA}/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/${CUDA}/lib64:${TENSORRT}/lib${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

<br/>
###### DeepStream SDK Pre-Installation
```console
sudo apt-get update
sudo apt-get install build-essential
sudo apt-get install ffmpeg
sudo apt get libxmu-dev
sudo apt-get install libgl1-mesa-dev
sudo apt-get install libglu1-mesa-dev
sudo apt-get install freeglut3-dev
sudo apt-get install libopencv-dev python-opencv
```

<br/>
###### [GLEW](http://glew.sourceforge.net/index.html)
```console
make all
sudo make install
```

<br/>
###### Edit deepstream/makes/defines.inc
```console
TENSORRT_INC_PATH = /usr/local/TensorRT-3.0.2/include
TENSORRT_LIB_PATH = /usr/local/TensorRT-3.0.2/lib
VIDEOSDK_INSTALL_PATH = /home/${username}/cuda-workspace/Video_Codec_SDK_8.0.14
```
